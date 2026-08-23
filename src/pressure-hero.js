const fullScreenVertexShader = `
  attribute vec2 aPosition;
  varying vec2 vUv;

  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const pressureFragmentShader = `
  precision mediump float;

  uniform sampler2D uTexture;
  uniform vec2 uPointer;
  uniform float uEnergy;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 delta = vUv - uPointer;
    float distanceToPress = length(delta);
    float pressure = exp(-distanceToPress * 7.0) * uEnergy;
    vec2 direction = delta / max(distanceToPress, 0.001);
    float ring = sin(distanceToPress * 56.0 - uTime * 8.0);
    vec2 pressedUv = vUv + direction * ring * pressure * 0.0042;
    pressedUv.x += sin(vUv.y * 38.0 + uTime * 2.5) * pressure * 0.0009;

    float registration = pressure * 0.0028;
    float red = texture2D(uTexture, clamp(pressedUv + vec2(registration, 0.0), 0.0, 1.0)).r;
    float green = texture2D(uTexture, clamp(pressedUv, 0.0, 1.0)).g;
    float blue = texture2D(uTexture, clamp(pressedUv - vec2(registration, 0.0), 0.0, 1.0)).b;
    gl_FragColor = vec4(red, green, blue, 1.0);
  }
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('WebGL shader could not be created.');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || 'WebGL shader compile failed.';
    gl.deleteShader(shader);
    throw new Error(message);
  }
  return shader;
}

function createProgram(gl) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, fullScreenVertexShader);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, pressureFragmentShader);
  const program = gl.createProgram();
  if (!program) throw new Error('WebGL program could not be created.');
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program) || 'WebGL program link failed.';
    gl.deleteProgram(program);
    throw new Error(message);
  }
  return program;
}

function waitForImage(image) {
  if (image.complete && image.naturalWidth > 0) return Promise.resolve();
  if (typeof image.decode === 'function') return image.decode();
  return new Promise((resolve, reject) => {
    image.addEventListener('load', resolve, { once: true });
    image.addEventListener('error', reject, { once: true });
  });
}

async function createPressureRenderer(poster, canvas, image) {
  await waitForImage(image);

  const gl = canvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: false
  });
  if (!gl) return null;

  const program = createProgram(gl);
  const positionLocation = gl.getAttribLocation(program, 'aPosition');
  const pointerLocation = gl.getUniformLocation(program, 'uPointer');
  const energyLocation = gl.getUniformLocation(program, 'uEnergy');
  const timeLocation = gl.getUniformLocation(program, 'uTime');
  const textureLocation = gl.getUniformLocation(program, 'uTexture');
  const buffer = gl.createBuffer();
  const texture = gl.createTexture();
  if (!buffer || !texture) throw new Error('WebGL buffers could not be created.');

  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.uniform1i(textureLocation, 0);

  let frame = 0;
  let firstFrame = true;
  let visible = true;
  let destroyed = false;
  let previousTime = performance.now();
  let elapsed = 0;
  let energy = 0.62;
  let pointerX = 0.58;
  let pointerY = 0.5;
  let previousPointerX = pointerX;
  let previousPointerY = pointerY;
  let bounds = poster.getBoundingClientRect();

  const resize = () => {
    bounds = poster.getBoundingClientRect();
    const baseDpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const maxPixels = 1_500_000;
    const rawPixels = Math.max(1, bounds.width * bounds.height * baseDpr * baseDpr);
    const scale = Math.min(1, Math.sqrt(maxPixels / rawPixels));
    const renderDpr = baseDpr * scale;
    const width = Math.max(1, Math.round(bounds.width * renderDpr));
    const height = Math.max(1, Math.round(bounds.height * renderDpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      energy = Math.max(energy, 0.04);
      start();
    }
  };

  const render = (timestamp) => {
    frame = 0;
    if (destroyed || !visible || document.hidden) return;
    const delta = Math.min(48, timestamp - previousTime);
    previousTime = timestamp;
    elapsed += delta / 1000;
    energy *= Math.pow(0.92, delta / 16.667);

    gl.useProgram(program);
    gl.uniform2f(pointerLocation, pointerX, pointerY);
    gl.uniform1f(energyLocation, energy);
    gl.uniform1f(timeLocation, elapsed);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    if (firstFrame) {
      firstFrame = false;
      poster.classList.add('is-webgl-ready');
    }

    if (energy > 0.004) frame = requestAnimationFrame(render);
  };

  function start() {
    if (destroyed || !visible || document.hidden || frame) return;
    previousTime = performance.now();
    frame = requestAnimationFrame(render);
  }

  const updateBounds = () => {
    bounds = poster.getBoundingClientRect();
  };

  const onPointerMove = (event) => {
    if (!bounds.width || !bounds.height) return;
    pointerX = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
    pointerY = 1 - Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
    const movement = Math.hypot(pointerX - previousPointerX, pointerY - previousPointerY);
    previousPointerX = pointerX;
    previousPointerY = pointerY;
    energy = Math.min(0.82, Math.max(energy, 0.12 + movement * 4.8));
    start();
  };

  const onPointerLeave = () => {
    energy = Math.max(energy, 0.09);
    start();
  };

  const onVisibilityChange = () => {
    if (document.hidden && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else if (!document.hidden && energy > 0.004) {
      start();
    }
  };

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (!visible && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else if (visible && energy > 0.004) {
      start();
    }
  }, { threshold: 0.02 });

  const resizeObserver = new ResizeObserver(resize);
  const onContextLost = (event) => {
    event.preventDefault();
    poster.classList.remove('is-webgl-ready');
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  };

  poster.addEventListener('pointerenter', updateBounds, { passive: true });
  poster.addEventListener('pointermove', onPointerMove, { passive: true });
  poster.addEventListener('pointerleave', onPointerLeave, { passive: true });
  canvas.addEventListener('webglcontextlost', onContextLost, false);
  document.addEventListener('visibilitychange', onVisibilityChange);
  intersectionObserver.observe(poster);
  resizeObserver.observe(poster);
  resize();
  start();

  return () => {
    destroyed = true;
    if (frame) cancelAnimationFrame(frame);
    poster.classList.remove('is-webgl-ready');
    poster.removeEventListener('pointerenter', updateBounds);
    poster.removeEventListener('pointermove', onPointerMove);
    poster.removeEventListener('pointerleave', onPointerLeave);
    canvas.removeEventListener('webglcontextlost', onContextLost);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    intersectionObserver.disconnect();
    resizeObserver.disconnect();
    gl.deleteTexture(texture);
    gl.deleteBuffer(buffer);
    gl.deleteProgram(program);
  };
}

function initProgressiveInk(hero) {
  const poster = hero.querySelector('[data-pressure-poster]');
  const canvas = hero.querySelector('[data-pressure-canvas]');
  const image = poster?.querySelector('img');
  if (!poster || !canvas || !image) return () => {};

  const media = window.matchMedia(
    '(min-width: 821px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
  );
  let cleanupRenderer = null;
  let setupToken = 0;

  const sync = async () => {
    setupToken += 1;
    const token = setupToken;
    const saveData = navigator.connection?.saveData === true;
    if (!media.matches || saveData) {
      cleanupRenderer?.();
      cleanupRenderer = null;
      return;
    }

    if (cleanupRenderer) return;
    try {
      const cleanup = await createPressureRenderer(poster, canvas, image);
      if (token !== setupToken || !media.matches) {
        cleanup?.();
        return;
      }
      cleanupRenderer = cleanup;
    } catch {
      poster.classList.remove('is-webgl-ready');
    }
  };

  media.addEventListener('change', sync);
  sync();

  return () => {
    setupToken += 1;
    media.removeEventListener('change', sync);
    cleanupRenderer?.();
  };
}

export function initPressureHero({ gsap }) {
  const hero = document.querySelector('[data-pressure-hero]');
  if (!hero) return;

  const poster = hero.querySelector('[data-pressure-poster]');
  const titleLines = [...hero.querySelectorAll('.pressure-hero__title b')];
  const registration = [...hero.querySelectorAll('.pressure-hero__registration span')];
  const support = [
    hero.querySelector('.pressure-hero__services'),
    hero.querySelector('.pressure-hero__brief'),
    hero.querySelector('.pressure-hero__depth')
  ].filter(Boolean);

  const motion = gsap.matchMedia();
  motion.add('(prefers-reduced-motion: no-preference)', () => {
    let timeline = null;
    let cancelled = false;

    const play = () => {
      if (cancelled) return;
      timeline = gsap.timeline({ defaults: { ease: 'expo.out' } });
      timeline
        .from(poster, {
          opacity: 0,
          scale: 0.9,
          rotation: -3.2,
          y: 42,
          duration: 0.95,
          clearProps: 'opacity,scale,rotation,y'
        }, 0.02)
        .from(registration, {
          scaleX: 0,
          transformOrigin: 'left center',
          stagger: 0.08,
          duration: 0.48,
          clearProps: 'transform'
        }, 0.12)
        .from(titleLines, {
          yPercent: 118,
          rotation: 2.4,
          stagger: 0.09,
          duration: 0.72,
          clearProps: 'transform'
        }, 0.18)
        .from(support, {
          opacity: 0,
          y: 16,
          stagger: 0.07,
          duration: 0.5,
          clearProps: 'opacity,transform'
        }, 0.5);
    };

    if (document.readyState === 'complete') play();
    else window.addEventListener('load', play, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('load', play);
      timeline?.revert();
    };
  });

  initProgressiveInk(hero);
}

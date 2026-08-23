import './fonts-base.css';
import { gsap } from 'gsap';
import './styles.css';
import './nav.css';
import './hero.css';
import './hero-studio.css';
import './content.css';
import './mobile-home.css';

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let prefersReducedMotion = motionPreference.matches;

// These sections begin below the initial viewport. Their layout styles are
// applied after `load`; animation code and its display font wait for actual
// interaction so they cannot compete with the hero LCP.
let belowFoldStylesPromise;
const loadBelowFoldStyles = () => {
  if (compactHomeQuery.matches) return Promise.resolve();
  if (!belowFoldStylesPromise) belowFoldStylesPromise = import('./home-below-fold.css');
  return belowFoldStylesPromise;
};

let belowFoldPromise;
const loadBelowFoldModules = () => {
  if (compactHomeQuery.matches) return Promise.resolve();
  if (!belowFoldPromise) {
    belowFoldPromise = Promise.all([
      loadBelowFoldStyles(),
      import('./fonts-home.css'),
      import('./service-odyssey.js'),
      import('gsap/ScrollTrigger')
    ]).then(([, , { initServiceOdyssey }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      initNarwhalHero();
      initServiceOdyssey({ gsap, ScrollTrigger });
      initCurrentLabMotion();
      ScrollTrigger.refresh();
    });
  }
  return belowFoldPromise;
};
const compactHomeQuery = window.matchMedia('(max-width: 820px)');
compactHomeQuery.addEventListener('change', ({ matches }) => {
  if (!matches) void loadBelowFoldModules();
});
const scheduleBelowFoldStyles = () => {
  const load = () => { void loadBelowFoldStyles(); };
  if ('requestIdleCallback' in window) window.requestIdleCallback(load);
  else window.setTimeout(load, 0);
};
const watchBelowFoldIntent = () => {
  let observer;
  const intentEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
  const load = () => {
    observer?.disconnect();
    intentEvents.forEach((eventName) => window.removeEventListener(eventName, load));
    void loadBelowFoldModules();
  };

  intentEvents.forEach((eventName) => window.addEventListener(eventName, load, {
    once: true,
    passive: eventName !== 'keydown'
  }));

  const firstDeferredSection = qs('#hero-services');
  if ('IntersectionObserver' in window && firstDeferredSection) {
    observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) load();
    }, { rootMargin: '0px 0px -10% 0px' });
    observer.observe(firstDeferredSection);
  }
};
if (window.location.hash) {
  // A deep-linked section needs its layout CSS before the browser calculates
  // the final scroll position. The import remains deferred for ordinary visits.
  void loadBelowFoldModules();
} else if (document.readyState === 'complete') {
  scheduleBelowFoldStyles();
  watchBelowFoldIntent();
} else {
  window.addEventListener('load', () => {
    scheduleBelowFoldStyles();
    watchBelowFoldIntent();
  }, { once: true });
}

qsa('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

function alignInitialHash() {
  if (!window.location.hash) return;
  const target = qs(window.location.hash);
  if (!target) return;

  const align = async () => {
    await loadBelowFoldModules();
    await (document.fonts?.ready || Promise.resolve());
    requestAnimationFrame(() => requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
    }));
  };

  if (document.readyState === 'complete') {
    void align();
  } else {
    window.addEventListener('load', () => {
      void align();
    }, { once: true });
  }
}

alignInitialHash();

// Critical above-the-fold content must be visible on the first paint. Delaying
// it until `load` makes the hero image and headline report artificially late as
// LCP, especially on mobile connections. Decorative motion starts elsewhere
// without hiding or clipping the page's primary content.
document.body.classList.add('is-ready');

const nav = qs('[data-nav]');
let navScrollFrame = 0;

window.addEventListener('scroll', () => {
  cancelAnimationFrame(navScrollFrame);
  navScrollFrame = requestAnimationFrame(() => {
    nav.classList.toggle('is-condensed', window.scrollY > 64);
  });
}, { passive: true });

const menuButton = qs('.menu-toggle');
const mobileMenu = qs('.mobile-menu');
const menuDepthLabel = qs('[data-menu-depth]', mobileMenu);
const menuModeLabel = qs('[data-menu-mode]', mobileMenu);
const menuDiveLinks = qsa('.menu-dive-link', mobileMenu);

function initDiveCurrent(canvas) {
  if (!canvas || canvas.hidden) {
    return {
      start() {},
      stop() {},
      point() {},
      splash() {}
    };
  }

  const context = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let time = 0;
  let running = false;
  let frame = 0;
  let previousTimestamp = 0;
  let pointerX = 0.5;
  let pointerY = 0.42;
  let pointerTargetX = 0.5;
  let pointerTargetY = 0.42;
  const bursts = [];

  const particles = Array.from({ length: 32 }, (_, index) => ({
    x: ((index * 137 + 29) % 719) / 719,
    y: ((index * 89 + 17) % 557) / 557,
    radius: 0.45 + (index % 5) * 0.24,
    speed: 0.008 + (index % 4) * 0.0025,
    sway: 0.7 + (index % 6) * 0.18,
    phase: index * 0.83
  }));

  const resize = () => {
    const density = Math.min(1.75, window.devicePixelRatio || 1);
    width = canvas.clientWidth || window.innerWidth;
    height = canvas.clientHeight || window.innerHeight;
    canvas.width = Math.round(width * density);
    canvas.height = Math.round(height * density);
    context.setTransform(density, 0, 0, density, 0, 0);
  };

  const drawCurrentLanes = () => {
    context.save();
    context.globalCompositeOperation = 'screen';
    context.lineCap = 'round';

    [
      { y: 0.28, alpha: 0.055, width: 1.2, speed: 0.11, phase: 0.2 },
      { y: 0.52, alpha: 0.036, width: 0.9, speed: -0.08, phase: 1.9 },
      { y: 0.76, alpha: 0.026, width: 0.7, speed: 0.065, phase: 3.2 }
    ].forEach((lane) => {
      const baseY = height * lane.y;
      const bend = Math.sin(time * lane.speed + lane.phase) * height * 0.035;
      context.beginPath();
      context.moveTo(-80, baseY + bend);
      context.bezierCurveTo(
        width * 0.24,
        baseY - 38 - bend,
        width * 0.64,
        baseY + 46 + bend,
        width + 80,
        baseY - bend * 0.4
      );
      context.strokeStyle = `rgba(150, 239, 226, ${lane.alpha})`;
      context.lineWidth = lane.width;
      context.stroke();
    });

    context.restore();
  };

  const drawParticles = () => {
    context.save();
    context.globalCompositeOperation = 'screen';

    particles.forEach((particle, index) => {
      const x = particle.x * width + Math.sin(time * particle.sway + particle.phase) * (8 + (index % 4) * 3);
      const rise = (time * particle.speed) % 1;
      const y = ((particle.y - rise + 1) % 1) * height;
      const pulse = 0.58 + Math.sin(time * 0.7 + particle.phase) * 0.24;

      context.beginPath();
      context.ellipse(x, y, particle.radius, particle.radius * 1.65, 0.16, 0, Math.PI * 2);
      context.fillStyle = `rgba(217, 255, 249, ${0.14 + pulse * 0.14})`;
      context.fill();
    });

    bursts.forEach((burst) => {
      burst.age += 0.016;
      burst.dots.forEach((dot) => {
        const progress = Math.min(1, burst.age / dot.life);
        const x = burst.x + dot.vx * burst.age;
        const y = burst.y + dot.vy * burst.age - 18 * burst.age * burst.age;
        context.beginPath();
        context.arc(x, y, dot.radius * (1 - progress * 0.35), 0, Math.PI * 2);
        context.strokeStyle = `rgba(229, 255, 251, ${(1 - progress) * 0.64})`;
        context.lineWidth = 0.8;
        context.stroke();
      });
    });

    while (bursts.length && bursts[0].age > 1.35) bursts.shift();
    context.restore();
  };

  const render = (delta = 0.016) => {
    time += delta;
    pointerX += (pointerTargetX - pointerX) * Math.min(1, delta * 3.8);
    pointerY += (pointerTargetY - pointerY) * Math.min(1, delta * 3.8);
    context.clearRect(0, 0, width, height);

    const lightX = pointerX * width;
    const lightY = pointerY * height;
    const radius = Math.max(220, Math.min(420, width * 0.65));
    const glow = context.createRadialGradient(lightX, lightY, 0, lightX, lightY, radius);
    glow.addColorStop(0, 'rgba(135, 237, 222, 0.08)');
    glow.addColorStop(1, 'rgba(135, 237, 222, 0)');
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    drawCurrentLanes();
    drawParticles();
  };

  const draw = (timestamp) => {
    if (!running) return;
    const delta = previousTimestamp ? Math.min(0.034, (timestamp - previousTimestamp) / 1000) : 0.016;
    previousTimestamp = timestamp;
    render(delta);
    frame = requestAnimationFrame(draw);
  };

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  return {
    start() {
      if (canvas.hidden) return;
      resize();
      if (prefersReducedMotion) {
        render(0);
        return;
      }
      if (running) return;
      running = true;
      frame = requestAnimationFrame(draw);
    },
    stop() {
      running = false;
      previousTimestamp = 0;
      cancelAnimationFrame(frame);
    },
    point(clientX, clientY) {
      if (canvas.hidden) return;
      pointerTargetX = Math.max(0, Math.min(1, clientX / Math.max(1, width)));
      pointerTargetY = Math.max(0, Math.min(1, clientY / Math.max(1, height)));
    },
    splash(clientX, clientY, strength = 1) {
      if (canvas.hidden) return;
      const count = Math.round(5 + strength * 5);
      bursts.push({
        x: clientX,
        y: clientY,
        age: 0,
        dots: Array.from({ length: count }, (_, index) => ({
          vx: Math.cos(index * 2.399 + strength) * (12 + (index % 4) * 7) * strength,
          vy: Math.sin(index * 2.399 + strength) * (10 + (index % 3) * 6) * strength,
          radius: 0.8 + (index % 3) * 0.45,
          life: 0.72 + (index % 4) * 0.13
        }))
      });
    }
  };
}

const diveCurrent = initDiveCurrent(qs('#menu-current'));
let menuGeometry = { x: window.innerWidth - 34, y: 34, radius: window.innerHeight * 1.5 };

const syncMenuGeometry = () => {
  const bounds = menuButton.getBoundingClientRect();
  const x = bounds.left + bounds.width / 2;
  const y = bounds.top + bounds.height / 2;
  const farX = Math.max(x, window.innerWidth - x);
  const farY = Math.max(y, window.innerHeight - y);
  menuGeometry = { x, y, radius: Math.hypot(farX, farY) * 1.08 };
  mobileMenu.style.setProperty('--menu-origin-x', `${x}px`);
  mobileMenu.style.setProperty('--menu-origin-y', `${y}px`);
};

const depthValue = { value: 0 };
const menuTimeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'expo.out' },
  onUpdate: () => {
    depthValue.value = menuTimeline.progress() * 420;
    menuDepthLabel.textContent = `${String(Math.round(depthValue.value)).padStart(3, '0')}M`;
  },
  onReverseComplete: () => {
    mobileMenu.classList.remove('is-rendered');
    document.body.classList.remove('menu-open');
    diveCurrent.stop();
  }
});

menuTimeline
  .fromTo(
    mobileMenu,
    { clipPath: () => `circle(0px at ${menuGeometry.x}px ${menuGeometry.y}px)` },
    { clipPath: () => `circle(${menuGeometry.radius}px at ${menuGeometry.x}px ${menuGeometry.y}px)`, duration: 0.58, ease: 'power4.inOut' },
    0
  )
  .fromTo('.menu-dive-link',
    { y: 34, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
    { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 0.5, stagger: 0.06, ease: 'power4.out' },
    0.16
  )
  .fromTo('.mobile-menu__footer',
    { y: 18, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.42 },
    0.34
  );

motionPreference.addEventListener('change', (event) => {
  prefersReducedMotion = event.matches;
  if (!event.matches) return;

  // Stop motion already in progress when the operating-system preference is
  // changed while this page is open. GSAP matchMedia handles page timelines;
  // these imperative menu/canvas effects need an explicit stop.
  menuTimeline.pause();
  diveCurrent.stop();
  if (menuButton.getAttribute('aria-expanded') === 'true') setMenu(true);
  window.scrollTo({ top: window.scrollY, behavior: 'auto' });
});

mobileMenu.addEventListener('pointermove', (event) => {
  if (menuButton.getAttribute('aria-expanded') !== 'true') return;
  diveCurrent.point(event.clientX, event.clientY);
}, { passive: true });

menuDiveLinks.forEach((link) => {
  const showCurrent = () => {
    menuModeLabel.textContent = link.dataset.current || 'ANA AKINTI';
  };
  const resetCurrent = () => {
    if (!link.matches(':focus-visible')) menuModeLabel.textContent = 'ANA AKINTI';
  };

  link.addEventListener('pointerenter', showCurrent, { passive: true });
  link.addEventListener('focus', showCurrent);
  link.addEventListener('pointerleave', resetCurrent, { passive: true });
  link.addEventListener('blur', resetCurrent);
  link.addEventListener('pointerdown', (event) => {
    diveCurrent.splash(event.clientX, event.clientY, event.pointerType === 'touch' ? 1.25 : 0.8);
  }, { passive: true });
});

function setMenu(open, { restoreFocus = true } = {}) {
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  mobileMenu.toggleAttribute('inert', !open);
  qs('span', menuButton).textContent = open ? 'KAPAT' : 'MENÜ';

  if (open) {
    syncMenuGeometry();
    document.body.classList.add('menu-open');
    mobileMenu.classList.add('is-rendered');
    menuModeLabel.textContent = 'ANA AKINTI';
    diveCurrent.start();
    diveCurrent.splash(menuGeometry.x, menuGeometry.y, 1.1);

    if (prefersReducedMotion) {
      menuDepthLabel.textContent = '420M';
      gsap.set(mobileMenu, { clipPath: `circle(${menuGeometry.radius}px at ${menuGeometry.x}px ${menuGeometry.y}px)` });
      gsap.set(['.mobile-menu__telemetry', '.menu-dive-link', '.mobile-menu__footer', '.mobile-menu__light'], { clearProps: 'all' });
    } else {
      menuTimeline.timeScale(1).invalidate().restart();
    }
  } else if (prefersReducedMotion) {
    gsap.set(mobileMenu, { clipPath: `circle(0px at ${menuGeometry.x}px ${menuGeometry.y}px)` });
    mobileMenu.classList.remove('is-rendered');
    document.body.classList.remove('menu-open');
    diveCurrent.stop();
  } else if (menuTimeline.progress() > 0) {
    menuTimeline.timeScale(1.28).reverse();
  } else {
    mobileMenu.classList.remove('is-rendered');
    document.body.classList.remove('menu-open');
    diveCurrent.stop();
  }

  if (!open && restoreFocus) {
    menuButton.focus({ preventScroll: true });
  }
}

menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
qsa('.mobile-menu a').forEach((link) => link.addEventListener('click', () => setMenu(false, { restoreFocus: false })));

document.addEventListener('keydown', (event) => {
  if (menuButton.getAttribute('aria-expanded') !== 'true') return;

  if (event.key === 'Escape') {
    event.preventDefault();
    setMenu(false);
    return;
  }

  if (event.key !== 'Tab') return;
  const focusable = [menuButton, ...qsa('a', mobileMenu)];
  const currentIndex = focusable.indexOf(document.activeElement);
  const nextIndex = event.shiftKey
    ? (currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1)
    : (currentIndex === focusable.length - 1 ? 0 : currentIndex + 1);
  event.preventDefault();
  focusable[nextIndex].focus();
});

const sectionNavLinks = qsa('.desktop-nav a[href^="#"], .mobile-menu a[href^="#"]');
const sectionNavTargets = [...new Set(sectionNavLinks.map((link) => link.getAttribute('href')))]
  .map((href) => ({ href, element: qs(href) }))
  .filter(({ element }) => element);
let navStateFrame = 0;

const syncSectionNavigation = () => {
  const probe = window.scrollY + window.innerHeight * 0.38;
  let activeHref = '';

  sectionNavTargets.forEach(({ href, element }) => {
    if (element.offsetTop <= probe) activeHref = href;
  });

  sectionNavLinks.forEach((link) => {
    const active = link.getAttribute('href') === activeHref;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};

window.addEventListener('scroll', () => {
  cancelAnimationFrame(navStateFrame);
  navStateFrame = requestAnimationFrame(syncSectionNavigation);
}, { passive: true });

window.addEventListener('resize', syncSectionNavigation, { passive: true });
syncSectionNavigation();

function initNarwhalHero() {
  const hero = qs('[data-narwhal-hero]');
  const scene = qs('[data-narwhal-scene]');
  if (!hero || !scene) return;
  const mascot = qs('.hero-mascot', scene);
  const wake = qs('.mascot-wake', scene);
  if (!mascot || !wake) return;

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference) and (min-width: 821px)', () => {
    const tweens = [];
    let handlePointerMove;
    let handlePointerLeave;

    if (window.matchMedia('(pointer: fine)').matches) {
      const moveSceneX = gsap.quickTo(scene, 'x', { duration: 0.65, ease: 'power3.out' });
      const moveSceneY = gsap.quickTo(scene, 'y', { duration: 0.65, ease: 'power3.out' });
      const rotateMascot = gsap.quickTo(mascot, 'rotation', { duration: 0.72, ease: 'power3.out' });
      const moveWakeX = gsap.quickTo(wake, 'x', { duration: 0.8, ease: 'power3.out' });

      handlePointerMove = (event) => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        moveSceneX(x * 15);
        moveSceneY(y * 10);
        rotateMascot(x * 1.2);
        moveWakeX(x * -12);
      };
      handlePointerLeave = () => {
        moveSceneX(0);
        moveSceneY(0);
        rotateMascot(0);
        moveWakeX(0);
      };
      hero.addEventListener('pointermove', handlePointerMove, { passive: true });
      hero.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    }

    tweens.push(gsap.to(scene, {
      yPercent: 3,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.9 }
    }));
    return () => {
      tweens.forEach((tween) => tween.kill());
      if (handlePointerMove) hero.removeEventListener('pointermove', handlePointerMove);
      if (handlePointerLeave) hero.removeEventListener('pointerleave', handlePointerLeave);
      gsap.set([scene, mascot, wake], { clearProps: 'transform' });
    };
  });
}

let currentLabMotionInitialized = false;
function initCurrentLabMotion() {
  if (currentLabMotionInitialized) return;
  currentLabMotionInitialized = true;
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference) and (min-width: 821px)', () => {
  const currentLab = qs('[data-current-lab]');
  if (currentLab) {
    const labHeadline = qs('.current-lab__headline', currentLab);
    const labHands = qs('.current-lab__hands', currentLab);
    const labDisciplines = qsa('.current-discipline', currentLab);
    const labCta = qs('.current-lab__cta', currentLab);
    const labTimeline = gsap.timeline({
      defaults: { ease: 'expo.out', clearProps: 'opacity,transform' },
      scrollTrigger: { trigger: currentLab, start: 'top 74%' }
    });

    labTimeline
      .from(qs('.current-lab__lockup', labHeadline), {
        x: -38,
        rotation: -2,
        opacity: 0,
        duration: 0.78
      }, 0.08)
      .from(labHands, {
        y: 44,
        rotation: 3,
        scale: 0.9,
        opacity: 0.2,
        duration: 0.9
      }, 0.16)
      .from(labDisciplines, {
        x: (index) => index === 1 ? 34 : -34,
        opacity: 0,
        stagger: 0.085,
        duration: 0.62
      }, 0.32)
      .from(labCta, {
        y: 18,
        opacity: 0,
        duration: 0.52
      }, 0.48);
  }

  });
}

gsap.matchMedia().add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
  const cleanups = qsa('.magnetic').map((element) => {
    const handlePointerMove = (event) => {
      const bounds = element.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;
      gsap.to(element, { x: x * 0.12, y: y * 0.16, duration: 0.28, ease: 'power3.out' });
    };
    const handlePointerLeave = () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.55, ease: 'power4.out' });
    };
    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerleave', handlePointerLeave);
      gsap.killTweensOf(element);
      gsap.set(element, { clearProps: 'transform' });
    };
  });
  return () => cleanups.forEach((cleanup) => cleanup());
});

qsa('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', async (event) => {
    const targetHash = link.getAttribute('href');
    const target = qs(targetHash);
    if (!target) return;
    event.preventDefault();
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }
    await loadBelowFoldModules();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  });
});

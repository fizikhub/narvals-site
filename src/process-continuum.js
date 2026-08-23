import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const one = (selector, scope = document) => scope.querySelector(selector);
const all = (selector, scope = document) => [...scope.querySelectorAll(selector)];

export default function initProcessContinuum() {
  const film = one('[data-process-film]');
  if (!film) return;

  const stage = one('.process-stage', film);
  const machine = one('.process-machine', film);
  const shutters = all('.process-color-layer i', film);
  const scenes = all('[data-process-scene]', film);
  const titleLines = scenes.map((scene) => all('.process-title__line > span', scene));
  const copies = scenes.map((scene) => one('.process-composition > p > span', scene));
  const meter = one('.process-meter', film);
  const meterFill = one('[data-process-progress]', film);
  const meterCount = one('[data-process-count]', film);
  const meterLabel = one('[data-process-label]', film);
  const readout = one('.process-readout', film);
  const layers = all('[data-machine-layer]', film);
  const focusLayer = one('[data-machine-layer="focus"]', film);
  const designLayer = one('[data-machine-layer="design"]', film);
  const codeLayer = one('[data-machine-layer="code"]', film);
  const signalLayer = one('[data-machine-layer="signal"]', film);
  const core = one('[data-machine-core]', film);
  const coreRing = one('[data-core-ring]', film);
  const coreSlashes = all('[data-core-slash]', film);
  const coreCross = one('[data-core-cross]', film);
  const ground = one('.machine-ground', film);
  const isMobile = window.matchMedia('(max-width: 820px)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const labels = ['Netleştir', 'Tasarla', 'Kodla', 'Yayınla'];
  const surfaces = ['var(--ice)', 'var(--yellow)', 'var(--coral)', 'var(--abyss)'];
  let activeScene = -1;

  const setAccessibleScene = (index) => {
    if (index === activeScene) return;
    activeScene = index;
    film.dataset.activeScene = String(index + 1);
    meterCount.textContent = String(index + 1).padStart(2, '0');
    meterLabel.textContent = labels[index];
    scenes.forEach((scene, sceneIndex) => {
      const current = sceneIndex === index;
      scene.classList.toggle('is-active', current);
      if (current) {
        scene.removeAttribute('aria-hidden');
        scene.setAttribute('aria-current', 'step');
      } else {
        scene.setAttribute('aria-hidden', 'true');
        scene.removeAttribute('aria-current');
      }
    });
  };

  if (reduceMotion) {
    scenes.forEach((scene) => scene.removeAttribute('aria-hidden'));
    return;
  }

  const focusOrbits = all('[data-focus-orbit]', focusLayer);
  const focusWires = all('[data-focus-wire]', focusLayer);
  const focusNodes = all('[data-focus-node]', focusLayer);
  const focusBrackets = one('[data-focus-brackets]', focusLayer);
  const designPlanes = all('[data-design-plane]', designLayer);
  const designRules = all('[data-design-rule]', designLayer);
  const designPins = all('[data-design-pin]', designLayer);
  const codeBuses = all('[data-code-bus]', codeLayer);
  const codeThreads = all('[data-code-thread]', codeLayer);
  const codePorts = all('[data-code-port]', codeLayer);
  const codePulse = one('[data-code-pulse]', codeLayer);
  const signalRings = all('[data-signal-ring]', signalLayer);
  const signalRays = all('[data-signal-ray]', signalLayer);
  const signalContacts = all('[data-signal-contact]', signalLayer);

  gsap.set(stage, { backgroundColor: surfaces[0] });
  gsap.set(machine, {
    yPercent: -50,
    xPercent: isMobile ? -50 : 0,
    color: 'var(--ink)',
    transformOrigin: '50% 50%'
  });
  gsap.set(layers, { autoAlpha: 0 });
  gsap.set(focusLayer, { autoAlpha: 1 });
  gsap.set(scenes[0], { autoAlpha: 1, pointerEvents: 'auto' });
  gsap.set(scenes.slice(1), { autoAlpha: 0, pointerEvents: 'none' });
  gsap.set(meterFill, { scaleX: 0, transformOrigin: 'left center' });
  gsap.set(ground, { scaleX: 0.64, autoAlpha: 0.4 });
  gsap.set(focusOrbits, { scale: 0.58, rotation: -18, autoAlpha: 0 });
  gsap.set(focusWires, { scale: 0.72, autoAlpha: 0 });
  gsap.set(focusNodes, {
    x: (index) => [-74, 68, -65, 72][index],
    y: (index) => [-42, -38, 45, 40][index],
    scale: 0.5,
    autoAlpha: 0
  });
  gsap.set(focusBrackets, { scale: 1.28, autoAlpha: 0 });
  gsap.set(core, { scale: 0.76, rotation: -12, autoAlpha: 0.62 });
  gsap.set(coreCross, { scale: 1.32, autoAlpha: 0 });

  gsap.set(designPlanes, {
    x: (index) => [-96, 98, -72][index],
    y: (index) => [-60, -50, 72][index],
    rotation: (index) => [-14, 13, -9][index],
    scale: 0.62,
    autoAlpha: 0
  });
  gsap.set(designRules, { scaleX: 0, autoAlpha: 0, transformOrigin: 'left center' });
  gsap.set(designPins, { scale: 0, autoAlpha: 0 });

  gsap.set(codeBuses, { scaleX: 0, autoAlpha: 0, transformOrigin: 'center center' });
  gsap.set(codeThreads, { scaleX: 0, autoAlpha: 0, transformOrigin: 'center center' });
  gsap.set(codePorts, { scale: 0, autoAlpha: 0 });
  gsap.set(codePulse, { scale: 0.5, autoAlpha: 0 });

  gsap.set(signalRings, { scale: 0.38, rotation: -24, autoAlpha: 0 });
  gsap.set(signalRays, { scale: 0.3, autoAlpha: 0 });
  gsap.set(signalContacts, { scale: 0, autoAlpha: 0 });
  setAccessibleScene(0);

  const timeline = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: film,
      start: 'top top',
      end: 'bottom bottom',
      scrub: isMobile ? 0.22 : 0.36,
      invalidateOnRefresh: true,
      onUpdate: (self) => setAccessibleScene(Math.min(3, Math.floor(self.progress * 4)))
    }
  });

  const changeScene = (from, to, layer, at) => {
    const dark = to === 3;
    const machineX = isMobile ? 0 : (to % 2 ? -clampViewport(160) : 0);
    timeline
      .set(shutters, {
        backgroundColor: surfaces[to],
        scaleY: 0,
        transformOrigin: (index) => index % 2 ? 'bottom center' : 'top center',
        autoAlpha: 1
      }, at)
      .to(titleLines[from], { yPercent: -36, autoAlpha: 0, duration: 0.045, ease: 'power4.in' }, at)
      .to(copies[from], { yPercent: -24, autoAlpha: 0, duration: 0.04, ease: 'power3.in' }, at + 0.006)
      .to(shutters, { scaleY: 1, stagger: 0.012, duration: 0.05, ease: 'power4.inOut' }, at + 0.008)
      .set(stage, { backgroundColor: surfaces[to] }, at + 0.07)
      .set(scenes[to], { autoAlpha: 1, pointerEvents: 'auto' }, at + 0.07)
      .set(scenes[from], { autoAlpha: 0, pointerEvents: 'none' }, at + 0.071)
      .set(layer, { autoAlpha: 1 }, at + 0.07)
      .set(titleLines[to], { yPercent: 42, autoAlpha: 0 }, at + 0.07)
      .set(copies[to], { yPercent: 28, autoAlpha: 0 }, at + 0.07)
      .to(machine, { x: machineX, color: dark ? 'var(--offwhite)' : 'var(--ink)', duration: 0.075, ease: 'power3.inOut' }, at + 0.065)
      .to([meter, readout], { color: dark ? 'var(--offwhite)' : 'var(--ink)', duration: 0.05 }, at + 0.066)
      .to(shutters, {
        scaleY: 0,
        stagger: 0.012,
        duration: 0.05,
        ease: 'power4.inOut',
        transformOrigin: (index) => index % 2 ? 'top center' : 'bottom center'
      }, at + 0.074)
      .to(titleLines[to], { yPercent: 0, autoAlpha: 1, duration: 0.06, ease: 'power4.out' }, at + 0.086)
      .to(copies[to], { yPercent: 0, autoAlpha: 1, duration: 0.05, ease: 'expo.out' }, at + 0.105);
  };

  timeline
    .to(meterFill, { scaleX: 1, duration: 1 }, 0)
    .to(ground, { scaleX: 1, autoAlpha: 1, duration: 0.13, ease: 'power3.out' }, 0.008)
    .to(focusOrbits, { scale: 1, rotation: 0, autoAlpha: 1, stagger: 0.014, duration: 0.15, ease: 'power4.out' }, 0.012)
    .to(focusWires, { scale: 1, autoAlpha: 1, duration: 0.12, ease: 'power3.out' }, 0.035)
    .to(focusNodes, { x: 0, y: 0, scale: 1, autoAlpha: 1, stagger: 0.014, duration: 0.12, ease: 'power4.out' }, 0.052)
    .to(core, { scale: 1, rotation: 0, autoAlpha: 1, duration: 0.14, ease: 'power4.out' }, 0.065)
    .to(focusBrackets, { scale: 1, autoAlpha: 1, duration: 0.09, ease: 'power4.out' }, 0.1)
    .to(coreCross, { scale: 1, autoAlpha: 1, duration: 0.08, ease: 'power4.out' }, 0.12)
    .to(focusLayer, { scale: 0.9, rotation: 5, autoAlpha: 0, duration: 0.055, ease: 'power3.in' }, 0.214)

    .to(designPlanes, { x: 0, y: 0, rotation: 0, scale: 1, autoAlpha: 1, stagger: 0.016, duration: 0.13, ease: 'power4.out' }, 0.278)
    .to(designRules, { scaleX: 1, autoAlpha: 1, stagger: 0.018, duration: 0.08, ease: 'power3.inOut' }, 0.335)
    .to(designPins, { scale: 1, autoAlpha: 1, stagger: 0.014, duration: 0.07, ease: 'power4.out' }, 0.365)
    .to(core, { rotation: 0, scale: 0.86, duration: 0.12, ease: 'power3.inOut' }, 0.29)
    .to(coreSlashes, { scaleY: 0.66, rotation: 0, stagger: 0.015, duration: 0.1, ease: 'power3.inOut' }, 0.315)
    .to(designLayer, { scale: 1.08, rotation: -4, autoAlpha: 0, duration: 0.055, ease: 'power3.in' }, 0.464)

    .to(codeBuses, { scaleX: 1, autoAlpha: 1, stagger: 0.014, duration: 0.12, ease: 'power3.inOut' }, 0.528)
    .to(codeThreads, { scaleX: 1, autoAlpha: 1, stagger: 0.012, duration: 0.11, ease: 'power3.inOut' }, 0.555)
    .to(codePorts, { scale: 1, autoAlpha: 1, stagger: 0.014, duration: 0.08, ease: 'power4.out' }, 0.58)
    .to(codePulse, { scale: 1, autoAlpha: 1, duration: 0.075, ease: 'power4.out' }, 0.61)
    .to(core, { rotation: 0, scale: 1, duration: 0.12, ease: 'power3.inOut' }, 0.535)
    .to(coreSlashes, { scaleY: 0.42, rotation: 0, stagger: 0.015, duration: 0.11, ease: 'power3.inOut' }, 0.565)
    .to(codePulse, { scale: 0.4, autoAlpha: 0.2, duration: 0.08, ease: 'power2.in' }, 0.665)
    .to(codeLayer, { scale: 0.92, autoAlpha: 0, duration: 0.055, ease: 'power3.in' }, 0.714)

    .to(signalRays, { scale: 1, autoAlpha: 1, stagger: 0.014, duration: 0.13, ease: 'power4.out' }, 0.778)
    .to(signalRings, { scale: 1, rotation: 0, autoAlpha: 1, stagger: 0.018, duration: 0.14, ease: 'power3.out' }, 0.795)
    .to(signalContacts, { scale: 1, autoAlpha: 1, stagger: 0.014, duration: 0.09, ease: 'power4.out' }, 0.845)
    .to(core, { rotation: 0, scale: 1.14, duration: 0.13, ease: 'power3.inOut' }, 0.79)
    .to(coreSlashes, { scaleY: 1, rotation: 0, stagger: 0.014, duration: 0.12, ease: 'power3.inOut' }, 0.81)
    .to(signalRings, { rotation: 14, duration: 0.12 }, 0.88)
    .to({}, { duration: 0.001 }, 0.999);

  changeScene(0, 1, designLayer, 0.225);
  changeScene(1, 2, codeLayer, 0.475);
  changeScene(2, 3, signalLayer, 0.725);

  function clampViewport(value) {
    return Math.min(value, window.innerWidth * 0.12);
  }
}

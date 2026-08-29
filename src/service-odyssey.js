export function initServiceOdyssey({ gsap, ScrollTrigger }) {
  const root = document.querySelector('[data-service-odyssey]');
  if (!root) return () => {};

  const media = gsap.matchMedia();

  media.add({
    motionOK: '(prefers-reduced-motion: no-preference)',
    wide: '(min-width: 821px)',
    compact: '(max-width: 820px)'
  }, (context) => {
    const { motionOK, wide } = context.conditions;
    if (!motionOK) return undefined;

    const scoped = gsap.context(() => {
      const thesis = root.querySelector('.odyssey-thesis');
      const thesisLines = thesis.querySelectorAll('#odyssey-title > *');
      const thesisLead = thesis.querySelector('.odyssey-thesis__lead');
      const thesisTimeline = gsap.timeline({
        defaults: { ease: 'expo.out' },
        scrollTrigger: {
          trigger: thesis,
          start: 'top 74%'
        }
      });

      thesisTimeline
        .from(thesisLines, {
          y: 58,
          rotation: (index) => index ? -1.4 : 0.8,
          opacity: 0.4,
          stagger: 0.085,
          duration: 0.84,
          clearProps: 'opacity,transform'
        }, 0)
        .from(thesisLead, {
          x: 34,
          opacity: 0.45,
          duration: 0.72,
          clearProps: 'opacity,transform'
        }, 0.18);

      const journey = root.querySelector('.service-journey');
      const current = root.querySelector('[data-journey-current]');
      gsap.to(current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: journey,
          start: 'top 72%',
          end: 'bottom 28%',
          scrub: 0.55
        }
      });

      root.querySelectorAll('[data-service-station]').forEach((station, index) => {
        const copy = station.querySelector('.service-station__copy');
        const copyParts = copy.querySelectorAll(':scope > *');
        const art = station.querySelector('.service-station__art');
        const artImage = art.querySelector('img');
        const marker = station.querySelector('.service-station__marker');
        const supporting = station.querySelectorAll('.station-output, .station-truth, .brand-thread, .booking-ledger');
        const glassGlints = station.querySelectorAll('.liquid-glass__glint');
        const direction = station.classList.contains('service-station--web')
          || station.classList.contains('service-station--software') ? 1 : -1;

        const stationTimeline = gsap.timeline({
          defaults: { ease: 'expo.out' },
          scrollTrigger: {
            trigger: station,
            start: 'top 70%'
          }
        });

        stationTimeline
          .from(marker, {
            scale: 0.68,
            rotation: direction * 15,
            opacity: 0.55,
            duration: 0.55,
            clearProps: 'opacity,transform'
          }, 0)
          .from(copyParts, {
            x: direction * (wide ? 36 : 16),
            y: (itemIndex) => itemIndex === 1 ? (wide ? 20 : 12) : 8,
            opacity: 0.42,
            stagger: 0.055,
            duration: 0.7,
            clearProps: 'opacity,transform'
          }, 0.08)
          .from(art, {
            x: direction * (wide ? -52 : -18),
            y: wide ? 42 : 18,
            rotation: direction * -3,
            scale: wide ? 0.92 : 0.97,
            opacity: 0.38,
            duration: 0.92,
            clearProps: 'opacity,transform'
          }, 0.16)
          .from(supporting, {
            y: wide ? 34 : 16,
            rotation: (itemIndex) => (itemIndex % 2 ? 1.4 : -1.2),
            opacity: 0.42,
            stagger: 0.075,
            duration: 0.66,
            clearProps: 'opacity,transform'
          }, 0.4);

        if (glassGlints.length) {
          stationTimeline
            .fromTo(glassGlints, {
              xPercent: 0,
              opacity: 0
            }, {
              xPercent: 700,
              opacity: 0.46,
              duration: 0.72,
              stagger: 0.08,
              ease: 'power2.in'
            }, 0.48)
            .to(glassGlints, {
              xPercent: 840,
              opacity: 0,
              duration: 0.22,
              stagger: 0.08,
              ease: 'power2.out'
            }, 1.02);
        }

        if (wide) {
          gsap.to(artImage, {
            yPercent: index % 2 ? -3.5 : 3.5,
            rotation: index % 2 ? 0.55 : -0.55,
            ease: 'none',
            scrollTrigger: {
              trigger: station,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8
            }
          });
        }
      });

      const connection = root.querySelector('[data-system-connection]');
      if (connection) {
        const connectionTimeline = gsap.timeline({
          defaults: { ease: 'expo.out' },
          scrollTrigger: {
            trigger: connection,
            start: 'top 70%'
          }
        });

        connectionTimeline
          .from(connection.querySelectorAll('.system-connection__copy > *'), {
            x: -38,
            opacity: 0.4,
            stagger: 0.07,
            duration: 0.72,
            clearProps: 'opacity,transform'
          }, 0)
          .from(connection.querySelector('.system-connection__knot'), {
            x: 58,
            y: 35,
            rotation: 8,
            scale: 0.88,
            opacity: 0.36,
            duration: 1,
            clearProps: 'opacity,transform'
          }, 0.1)
          .from(connection.querySelectorAll('.connection-failures p'), {
            x: (itemIndex) => itemIndex % 2 ? 54 : -42,
            opacity: 0.4,
            stagger: 0.09,
            duration: 0.7,
            clearProps: 'opacity,transform'
          }, 0.34)
          .from(connection.querySelector('.connection-result'), {
            y: 38,
            opacity: 0.42,
            duration: 0.72,
            clearProps: 'opacity,transform'
          }, 0.54);

        if (wide && connection.querySelector('.system-connection__knot img')) {
          gsap.to(connection.querySelector('.system-connection__knot img'), {
            yPercent: -4,
            rotation: 1.4,
            ease: 'none',
            scrollTrigger: {
              trigger: connection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.9
            }
          });
        }
      }

      const workRoute = root.querySelector('[data-work-route]');
      const workTimeline = gsap.timeline({
        defaults: { ease: 'expo.out' },
        scrollTrigger: {
          trigger: workRoute,
          start: 'top 72%'
        }
      });

      workTimeline
        .from(workRoute.querySelectorAll('header > *'), {
          x: -32,
          stagger: 0.08,
          duration: 0.7,
          clearProps: 'transform'
        }, 0)
        .from(workRoute.querySelectorAll('ol li'), {
          y: 38,
          rotation: (itemIndex) => itemIndex % 2 ? 1.4 : -1.4,
          stagger: 0.075,
          duration: 0.72,
          clearProps: 'transform'
        }, 0.22);

      const cta = root.querySelector('.odyssey-cta');
      const ctaTimeline = gsap.timeline({
        defaults: { ease: 'expo.out' },
        scrollTrigger: {
          trigger: cta,
          start: 'top 72%'
        }
      });

      ctaTimeline
        .from(cta.querySelectorAll('.odyssey-cta__copy > *'), {
          x: -34,
          opacity: 0.42,
          stagger: 0.07,
          duration: 0.72,
          clearProps: 'opacity,transform'
        }, 0)
        .from(cta.querySelector('.odyssey-cta__button'), {
          x: 42,
          y: 22,
          rotation: 2,
          opacity: 0.42,
          duration: 0.76,
          clearProps: 'opacity,transform'
        }, 0.16)
        .from(cta.querySelector('.odyssey-cta__closing'), {
          y: 24,
          opacity: 0.42,
          duration: 0.58,
          clearProps: 'opacity,transform'
        }, 0.38);
    }, root);

    return () => scoped.revert();
  });

  return () => media.revert();
}

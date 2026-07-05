/**
 * HERO SECTION — Camille Larue Experience Portfolio
 * Design: Quiet Luxury Editorial
 *
 * The hero is a monumental statement. The name appears as architecture,
 * not text. A silk video creates atmospheric texture beneath. The gold
 * accent line anchors the composition with deliberate restraint.
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LOGO_URL = '/images/logo-cl.svg';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Gold accent line slides in from left
      tl.fromTo(lineRef.current,
        { width: 0, opacity: 0 },
        { width: '80px', opacity: 1, duration: 1, ease: 'expo.out' }
      );

      // Logo mark fades in with the accent line
      tl.fromTo(logoRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '<0.1'
      );

      // Name letters reveal with stagger
      tl.fromTo(nameRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out' },
        '-=0.6'
      );

      // Subtitle fades in
      tl.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        '-=0.8'
      );

      // Scroll hint pulse
      tl.to(scrollHintRef.current,
        { y: 8, opacity: 0.6, duration: 1.5, repeat: -1, yoyo: true, ease: 'power2.inOut' },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden flex items-end pb-16 sm:pb-24">
      {/* Background silk image with parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-silk-bg.svg')`,
            filter: 'blur(2px) brightness(0.95)',
          }}
        />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-bone/30 via-transparent to-bone/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-5xl">
          {/* Gold accent line */}
          <div ref={lineRef} className="h-[1px] bg-gold mb-6 sm:mb-8 opacity-0" />

          {/* Brand logo mark */}
          <img
            ref={logoRef}
            src={LOGO_URL}
            alt=""
            aria-hidden="true"
            className="w-10 h-10 sm:w-12 sm:h-12 mb-4 opacity-0"
          />

          {/* Main name */}
          <h1
            ref={nameRef}
            className="text-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-charcoal leading-[0.95] mb-4 sm:mb-6 opacity-0"
            style={{ color: '#1C1C1C' }}
          >
            Camille<br />
            <span className="italic font-light text-gold">Larue</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-body text-sm sm:text-base md:text-lg tracking-[0.35em] uppercase text-charcoal/50 font-light opacity-0"
            style={{ color: '#1C1C1C', opacity: 0.5 }}
          >
            Nail Artist &bull; Paris &bull; São Paulo
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 right-8 sm:right-12 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal/40" style={{ color: '#1C1C1C' }}>
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-charcoal/20" style={{ backgroundColor: '#1C1C1C' }} />
      </div>
    </section>
  );
}

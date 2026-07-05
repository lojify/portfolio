/**
 * THE VISION SECTION — Camille Larue Experience Portfolio
 * Design: Quiet Luxury Editorial
 *
 * A poetic manifesto that reveals letter by letter as the user scrolls.
 * The text is monumental, almost architectural. The reveal is slow and
 * deliberate, forcing the reader to pay attention to every word.
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TheVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLQuoteElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const ctx = gsap.context(() => {
      // Split text into characters for reveal animation
      const originalText = text.textContent || '';
      text.innerHTML = '';

      const chars = originalText.split('');
      chars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'split-char inline-block';
        text.appendChild(span);
      });

      const charSpans = text.querySelectorAll('.split-char');

      gsap.to(charSpans, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.012,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.to(lineRef.current, {
        width: '60px',
        opacity: 1,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-44 md:py-56">
      <div className="container">
        <div className="max-w-5xl">
          <p className="font-body text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold font-light mb-6 sm:mb-10">
            001
          </p>
          {/* Gold accent line */}
          <div
            ref={lineRef}
            className="h-[1px] bg-gold mb-10 sm:mb-16 opacity-0"
            style={{ width: 0 }}
          />

          {/* Vision quote */}
          <blockquote ref={textRef} className="text-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.3] tracking-tight">
            &ldquo;Cada unha é uma tela. Cada cliente, uma obra única. Eu não faço manicure — eu crio arte que você veste nas mãos.&rdquo;
          </blockquote>

          {/* Attribution */}
          <p className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-charcoal/40 mt-8 sm:mt-12 font-light" style={{ color: '#1C1C1C' }}>
            Camille Larue
          </p>
        </div>
      </div>
    </section>
  );
}

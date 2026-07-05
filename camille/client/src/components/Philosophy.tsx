/**
 * PHILOSOPHY SECTION — Camille Larue Experience Portfolio
 * Design: Quiet Luxury Editorial
 *
 * An editorial text block that reads like a magazine spread. The text
 * is large, generous with whitespace, and positioned to create visual
 * tension with the gold accent line. Paralax reveals as user scrolls.
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gold vertical line animates down
      gsap.fromTo(accentLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'expo.out',
          transformOrigin: 'top',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Paragraphs reveal with stagger and parallax
      const paragraphs = [p1Ref.current, p2Ref.current, p3Ref.current];
      paragraphs.forEach((p, i) => {
        gsap.fromTo(p,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: i * 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: p,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-44 md:py-56">
      <div className="container">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Gold vertical accent line */}
          <div
            ref={accentLineRef}
            className="absolute left-0 lg:left-[16.666667%] top-0 w-[1px] bg-gold h-full origin-top opacity-0"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Section label */}
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <p className="font-body text-[10px] sm:text-xs tracking-[0.35em] uppercase text-charcoal/40 font-light" style={{ color: '#1C1C1C' }}>
              002<br />Philosophy
            </p>
          </div>

          {/* Editorial text */}
          <div className="lg:col-span-9 lg:pl-16">
            <p ref={p1Ref} className="font-body text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 text-charcoal/70 font-light mb-8 max-w-3xl opacity-0" style={{ color: '#1C1C1C' }}>
              Treinada nas academias mais rigorosas de Paris e São Paulo, Camille desenvolveu uma linguagem visual única que transcende a manicure tradicional. Cada atendimento é um ritual de 2 a 3 horas — não é um serviço, é uma experiência.
            </p>

            <p ref={p2Ref} className="font-body text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 text-charcoal/70 font-light mb-8 max-w-3xl opacity-0" style={{ color: '#1C1C1C' }}>
              Utilizando técnicas de manicure russa combinadas com sua formação em artes plásticas, cada design é concebido como uma peça de arte miniaturizada. Os esmaltes são da Maisie Dunne, os pigmentos importados da Itália, e os cristais Swarovski são aplicados individualmente com precisão de ourivesaria.
            </p>

            <p ref={p3Ref} className="font-body text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 text-charcoal/70 font-light max-w-3xl opacity-0" style={{ color: '#1C1C1C' }}>
              O resultado? Unhas que são reconhecidas à distância. Um sinal sutil de que você não aceita o ordinário — nem em seus acessórios, nem em sua pele, nem em suas mãos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

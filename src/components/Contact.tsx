/**
 * CONTACT SECTION — Camille Larue Experience Portfolio
 * Design: Quiet Luxury Editorial
 *
 * Fecha o roteiro (ver ideas.md, seção 7 "Contact"): recompõe a página com
 * um convite direto e discreto, sem formulário — o luxo aqui é a simplicidade
 * de um único CTA e dois canais de contato reais.
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1, opacity: 1, duration: 1.2, ease: 'expo.out', transformOrigin: 'left',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
      gsap.fromTo(contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-44 md:py-56">
      <div className="container">
        <div className="max-w-3xl">
          <p className="font-body text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold font-light mb-6 sm:mb-10">
            006
          </p>

          <div ref={lineRef} className="h-[1px] bg-gold w-16 sm:w-24 mb-10 sm:mb-14 opacity-0" />

          <div ref={contentRef} className="opacity-0">
            <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-charcoal mb-8 sm:mb-10" style={{ color: '#1C1C1C' }}>
              Agende sua<br /><span className="italic font-light text-gold">experiência</span>
            </h2>

            <p className="font-body text-base sm:text-lg leading-relaxed text-charcoal/60 font-light max-w-xl mb-10 sm:mb-14" style={{ color: 'rgba(28,28,28,0.6)' }}>
              Atendimentos por hora marcada, em Paris e São Paulo. Vagas limitadas — cada sessão dura de 2 a 3 horas e recebe atenção total.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <a
                href="mailto:contato@camillelarue.com"
                className="group inline-flex items-center gap-3 font-body text-sm tracking-[0.2em] uppercase text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ color: '#1C1C1C' }}
              >
                contato@camillelarue.com
                <span className="inline-block w-6 h-[1px] bg-gold transition-all duration-500 group-hover:w-10" />
              </a>

              <a
                href="https://instagram.com/camillelarue"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 font-body text-sm tracking-[0.2em] uppercase text-charcoal/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ color: 'rgba(28,28,28,0.6)' }}
              >
                @camillelarue
                <span className="inline-block w-6 h-[1px] bg-gold transition-all duration-500 group-hover:w-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer discreto */}
        <div className="mt-32 sm:mt-44 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal/30" style={{ color: 'rgba(28,28,28,0.3)' }}>
            Camille Larue &copy; {new Date().getFullYear()}
          </p>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal/30" style={{ color: 'rgba(28,28,28,0.3)' }}>
            Paris &bull; São Paulo
          </p>
        </div>
      </div>
    </section>
  );
}

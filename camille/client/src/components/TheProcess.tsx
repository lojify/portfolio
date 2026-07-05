/**
 * THE PROCESS SECTION — Camille Larue Experience Portfolio
 * Design: Quiet Luxury Editorial
 *
 * This section details the client experience through numbered steps.
 * Each step has a gold number and editorial text. Images float with
 * different parallax speeds to create depth.
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: '01',
    title: 'A Consulta',
    description: 'Cada sessão começa com uma conversa sobre sua personalidade, estilo de vida e preferências. Camille cria um conceito único para você antes mesmo de tocar em uma unha.',
    image: '/images/process-detail.svg',
  },
  {
    number: '02',
    title: 'O Ritual',
    description: 'Três horas de imersão total. Manicure russa com precisão cirúrgica, cutículas perfeitas, e então a criação artística. Cada unha recebe atenção individual de orf\u00e8vrerie.',
    image: '/images/nail-art-3.svg',
  },
  {
    number: '03',
    title: 'A Revelação',
    description: 'O momento final. Suas mãos são reveladas como uma obra de arte. Com duração de até 3 semanas e acabamento que parece rec\u00e9m-sa\u00eddo do ateli\u00ea.',
    image: '/images/nail-art-1.svg',
  },
];

export default function TheProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((step, i) => {
        // Step number reveal
        const numberEl = step.querySelector('[data-step-num]') as HTMLElement;
        gsap.fromTo(numberEl,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, delay: i * 0.2, ease: 'expo.out',
            scrollTrigger: { trigger: step, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );

        // Title reveal
        const titleEl = step.querySelector('[data-step-title]') as HTMLElement;
        gsap.fromTo(titleEl,
          { x: -30, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, delay: i * 0.2 + 0.1, ease: 'expo.out',
            scrollTrigger: { trigger: step, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );

        // Description reveal
        const descEl = step.querySelector('[data-step-desc]') as HTMLElement;
        gsap.fromTo(descEl,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, delay: i * 0.2 + 0.2, ease: 'power2.out',
            scrollTrigger: { trigger: step, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );
      });

      // Image parallax
      imageRefs.current.forEach((img, i) => {
        gsap.fromTo(img,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1, scale: 1, duration: 1.2, delay: i * 0.15, ease: 'expo.out',
            scrollTrigger: { trigger: img, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-44 md:py-56" style={{ backgroundColor: '#1C1C1C' }}>
      <div className="container">
        {/* Section header */}
        <div className="mb-16 sm:mb-24">
          <p className="font-body text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold font-light mb-4">
            004
          </p>
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight" style={{ color: '#F8F7F4' }}>
            The<br /><span className="italic font-light text-gold">Process</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-24 sm:space-y-32 md:space-y-40">
          {STEPS.map((step, i) => (
            <div
              key={i}
              ref={(el) => { stepRefs.current[i] = el!; }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Text - alternate side */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <span
                  data-step-num
                  className="font-body text-xs tracking-[0.3em] text-gold block mb-4 opacity-0"
                >
                  {step.number}
                </span>
                <h3
                  data-step-title
                  className="text-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6 opacity-0"
                  style={{ color: '#F8F7F4' }}
                >
                  {step.title}
                </h3>
                <p
                  data-step-desc
                  className="font-body text-base sm:text-lg leading-relaxed sm:leading-8 font-light max-w-md opacity-0"
                  style={{ color: 'rgba(248,247,244,0.65)' }}
                >
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    ref={(el) => { imageRefs.current[i] = el!; }}
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold opacity-40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

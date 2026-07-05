/**
 * CURATED WORK SECTION — Camille Larue Experience Portfolio
 * Design: Quiet Luxury Editorial
 *
 * An asymmetric gallery where images have different sizes and move at
 * different parallax speeds. This creates a sense of depth and intentionality
 * — like walking through a gallery where each piece demands different attention.
 *
 * Images are sourced from Pexels and the generated assets.
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GALLERY_ITEMS = [
  {
    src: '/images/nail-art-1.svg',
    alt: 'French manicure with gold accents',
    className: 'col-span-12 sm:col-span-8 lg:col-span-6 row-span-2 h-[300px] sm:h-[400px] md:h-[500px]',
    parallaxSpeed: 0.3,
  },
  {
    src: '/images/nail-art-4.svg',
    alt: 'Elegant nude nail design',
    className: 'col-span-12 sm:col-span-4 lg:col-span-3 h-[250px] sm:h-[300px] md:h-[350px]',
    parallaxSpeed: 0.15,
  },
  {
    src: '/images/nail-art-5.svg',
    alt: 'Minimalist nail art close-up',
    className: 'col-span-12 sm:col-span-4 lg:col-span-3 h-[250px] sm:h-[300px] md:h-[350px]',
    parallaxSpeed: 0.45,
  },
  {
    src: '/images/nail-art-2.svg',
    alt: 'Champagne gold chrome nails',
    className: 'col-span-12 sm:col-span-6 lg:col-span-5 h-[300px] sm:h-[400px] md:h-[450px]',
    parallaxSpeed: 0.2,
  },
  {
    src: '/images/nail-art-3.svg',
    alt: 'Abstract nail polish pour',
    className: 'col-span-12 sm:col-span-6 lg:col-span-4 h-[280px] sm:h-[350px] md:h-[420px]',
    parallaxSpeed: 0.35,
  },
  {
    src: '/images/process-detail.svg',
    alt: 'Manicure tools and process',
    className: 'col-span-12 sm:col-span-8 lg:col-span-3 h-[250px] sm:h-[300px] md:h-[380px]',
    parallaxSpeed: 0.25,
  },
];

export default function CuratedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        const speed = GALLERY_ITEMS[i]?.parallaxSpeed || 0.2;

        // Reveal animation
        gsap.fromTo(item,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Parallax float
        gsap.to(item, {
          y: -30 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-44 md:py-56">
      <div className="container">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12 sm:mb-20">
          <div>
            <p className="font-body text-[10px] sm:text-xs tracking-[0.35em] uppercase text-charcoal/40 font-light mb-4" style={{ color: '#1C1C1C' }}>
              003
            </p>
            <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-charcoal">
              Curated<br /><span className="italic font-light">Work</span>
            </h2>
          </div>
          <div className="hidden sm:block">
            <div className="h-[1px] w-16 sm:w-24 bg-gold" />
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el!; }}
              className={`relative overflow-hidden group ${item.className} cursor-default`}
              style={{ willChange: 'transform' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/80">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

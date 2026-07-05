import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Hero from '@/components/Hero';
import TheVision from '@/components/TheVision';
import Philosophy from '@/components/Philosophy';
import CuratedWork from '@/components/CuratedWork';
import TheProcess from '@/components/TheProcess';
import TheArtifact from '@/components/TheArtifact';
import Contact from '@/components/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <main>
        <Hero />
        <TheVision />
        <Philosophy />
        <CuratedWork />
        <TheProcess />
        <TheArtifact />
        <Contact />
      </main>
    </div>
  );
}

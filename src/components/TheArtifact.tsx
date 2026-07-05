/**
 * THE ARTIFACT SECTION — Camille Larue Experience Portfolio
 * Design: Quiet Luxury Editorial
 *
 * A 3D abstract sculpture rendered with Three.js. The form is an organic
 * fluid shape in champagne gold that rotates slowly and reacts to mouse
 * movement with a smooth lerp. This is the visual centerpiece of the site.
 *
 * Uses @react-three/fiber for React integration and Drei for utilities.
 * The material is a physical material with champagne gold properties.
 */

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Gold material config
const GOLD_MATERIAL = {
  color: '#C5A059',
  metalness: 0.9,
  roughness: 0.15,
  envMapIntensity: 2,
};

function OrganicShape({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const baseRotRef = useRef({ x: 0, y: 0 });

  const reduceMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    if (reduceMotion) return; // peça em repouso, sem rotação automática nem parallax de mouse

    // Slow continuous rotation
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.08;

    // Mouse reaction with lerp for elegant delay
    const targetX = mouse.x * 0.5;
    const targetY = mouse.y * 0.3;
    baseRotRef.current.x += (targetX - baseRotRef.current.x) * 0.1;
    baseRotRef.current.y += (targetY - baseRotRef.current.y) * 0.1;

    meshRef.current.rotation.x += baseRotRef.current.x * delta;
    meshRef.current.rotation.y += baseRotRef.current.y * delta;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.8, 1.8, 1.8]}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhysicalMaterial
        ref={materialRef}
        {...GOLD_MATERIAL}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -3, -2]} intensity={0.3} />
      <pointLight position={[0, 3, 2]} intensity={0.5} color="#C5A059" />

      <Environment preset="studio" />
      <OrganicShape mouse={mouse} />

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.3}
        scale={10}
        blur={2}
        far={4.5}
        color="#C5A059"
      />
    </>
  );
}

export default function TheArtifact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Section label */}
      <div className="absolute top-8 sm:top-12 left-8 sm:left-12 z-10">
        <p className="font-body text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold font-light mb-2">
          005
        </p>
        <h2 className="text-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-charcoal">
          The <span className="italic font-light">Artifact</span>
        </h2>
      </div>

      {/* Skeleton enquanto a cena 3D carrega */}
      {!isLoaded && (
        <div className="absolute inset-0 z-0 flex items-center justify-center" style={{ backgroundColor: '#F8F7F4' }}>
          <div
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full animate-pulse"
            style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.25), transparent 70%)' }}
          />
        </div>
      )}

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
          onCreated={() => setIsLoaded(true)}
        >
          <color attach="background" args={['#F8F7F4']} />
          <Scene mouse={mouse} />
        </Canvas>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 z-10 max-w-sm">
        <p className="font-body text-sm text-charcoal/50 font-light leading-relaxed" style={{ color: '#1C1C1C' }}>
          Cada criação é uma escultura que vive na ponta dos seus dedos. Forma, cor e textura em perfeita harmonia.
        </p>
      </div>
    </section>
  );
}

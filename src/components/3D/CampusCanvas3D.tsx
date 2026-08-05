import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Sparkles, Layers, Eye } from 'lucide-react';

export const CampusCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState<'globe' | 'emblem' | 'campus'>('globe');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const isRotatingRef = useRef(isRotating);
  isRotatingRef.current = isRotating;

  const sceneRef = useRef<THREE.Scene | null>(null);
  const mainGroupRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 14);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Clear previous canvas if any
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 1.5); // Blue glow light
    dirLight1.position.set(10, 10, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x10b981, 1.2); // Green accent light
    dirLight2.position.set(-10, -10, -10);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x60a5fa, 2, 20);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // 5. Main Group
    const mainGroup = new THREE.Group();
    mainGroupRef.current = mainGroup;
    scene.add(mainGroup);

    // Central sphere / core
    const sphereGeo = new THREE.IcosahedronGeometry(2.8, 3);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a8a,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(sphereGeo, sphereMat);
    mainGroup.add(coreMesh);

    // Wireframe outer sphere
    const wireGeo = new THREE.IcosahedronGeometry(3.3, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // Orbit Rings representing knowledge orbits
    const ring1Geo = new THREE.TorusGeometry(4.2, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.9, roughness: 0.1 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(4.8, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.9, roughness: 0.1 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // Satellite cubes (representing School207 Pillars: Science, Art, Sports, Math)
    const satelliteGroup = new THREE.Group();
    const satGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const satMat = new THREE.MeshStandardMaterial({ color: 0x34d399, roughness: 0.3, metalness: 0.7 });

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const sat = new THREE.Mesh(satGeo, satMat);
      sat.position.set(Math.cos(angle) * 4.5, Math.sin(angle) * 4.5, (i % 2 === 0 ? 1 : -1) * 0.8);
      satelliteGroup.add(sat);
    }
    mainGroup.add(satelliteGroup);

    // Background floating particle stars
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 35;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 35;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Mouse Parallax Interactivity
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetX = x * 0.5;
      targetY = y * 0.5;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // 7. ResizeObserver for fluid responsive scaling
    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    });
    resizeObserver.observe(container);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (mainGroupRef.current) {
        if (isRotatingRef.current) {
          mainGroupRef.current.rotation.y += 0.008;
          mainGroupRef.current.rotation.x += 0.002;
        }

        // Smooth mouse parallax lerp
        mainGroupRef.current.rotation.y += (targetX - mainGroupRef.current.rotation.y) * 0.05;
        mainGroupRef.current.rotation.x += (-targetY - mainGroupRef.current.rotation.x) * 0.05;

        // Animate orbits and satellites
        ring1.rotation.z = elapsedTime * 0.5;
        ring2.rotation.z = -elapsedTime * 0.4;
        satelliteGroup.rotation.z = elapsedTime * 0.3;
        particles.rotation.y = elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satGeo.dispose();
      satMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[520px] rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-2xl flex flex-col justify-between p-6">
      {/* Background ambient lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-transparent to-emerald-950/60 pointer-events-none z-0" />

      {/* Header Bar overlay */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Interactive 3D Campus Experience
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
            School207 Digital Emblem
          </h3>
          <p className="text-xs md:text-sm text-slate-400 max-w-sm">
            Interactive Three.js 3D model representing the four pillars of knowledge, science, sports, and government excellence.
          </p>
        </div>

        {/* Rotation toggle button */}
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
            isRotating
              ? 'bg-blue-600/40 text-blue-200 border border-blue-500/50 hover:bg-blue-600/60'
              : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
          }`}
          title="Toggle 3D Rotation"
        >
          <RotateCcw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
          {isRotating ? 'Auto Rotate' : 'Paused'}
        </button>
      </div>

      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing" />

      {/* Bottom Floating Stats / Info Pills */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80 bg-slate-900/40 backdrop-blur-md -mx-6 -mb-6 p-4 px-6">
        <div className="flex items-center gap-4 text-xs text-slate-300">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            3D WebGL Active
          </span>
          <span className="hidden sm:inline-block text-slate-400">
            Drag mouse to rotate • Scroll to zoom
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1">
            <Layers className="w-3 h-3 text-blue-400" /> State Reg: 4378816351
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1">
            <Eye className="w-3 h-3 text-emerald-400" /> 6 STEM Orbiters
          </span>
        </div>
      </div>
    </div>
  );
};

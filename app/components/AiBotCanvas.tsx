"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function BotCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
      {/* Outer Wireframe Shell */}
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          color="#F3FE00"
          emissive="#F3FE00"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
        />
      </mesh>
      
      {/* Inner AI Energy Core */}
      <Sphere args={[0.7, 64, 64]}>
         <MeshDistortMaterial
            color="#16a34a"
            emissive="#22c55e"
            emissiveIntensity={0.8}
            attach="material"
            distort={0.5}
            speed={3}
            roughness={0.2}
            metalness={0.8}
         />
      </Sphere>
    </Float>
  );
}

export default function AiBotCanvas() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={2} />
        <pointLight position={[-2, -2, -2]} color="#F3FE00" intensity={3} />
        <pointLight position={[2, 2, 2]} color="#22c55e" intensity={2} />
        <BotCore />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}

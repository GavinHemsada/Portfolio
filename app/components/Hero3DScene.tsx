"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, TorusKnot, Sphere } from "@react-three/drei";
import * as THREE from "three";

function TorusKnotObject() {
  const groupRef = useRef<THREE.Group>(null);
  const outerKnotRef = useRef<THREE.Mesh>(null);
  const innerKnotRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Elegant, complex twisting rotation
    if (outerKnotRef.current) {
      outerKnotRef.current.rotation.x += delta * 0.1;
      outerKnotRef.current.rotation.y += delta * 0.15;
      outerKnotRef.current.rotation.z += delta * 0.05;
    }
    
    if (innerKnotRef.current) {
      innerKnotRef.current.rotation.x -= delta * 0.15;
      innerKnotRef.current.rotation.y -= delta * 0.2;
    }

    // Subtle drifting across the screen
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      groupRef.current.position.x = Math.sin(time * 0.15) * 2;  
      groupRef.current.position.y = Math.cos(time * 0.1) * 1.2; 
      groupRef.current.position.z = Math.sin(time * 0.08) * -0.5;   
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        
        {/* Giant Outer Mathematical Knot */}
        <TorusKnot ref={outerKnotRef} args={[2.5, 0.8, 50, 6]} scale={1.2}>
          <meshBasicMaterial
            color="#ffffff"
            wireframe={true}
            transparent={true}
            opacity={0.08}
          />
        </TorusKnot>

        {/* Inner Glowing Knot */}
        <TorusKnot ref={innerKnotRef} args={[1.5, 0.4, 48, 8]}>
          <meshBasicMaterial
            color="#F3FE00"
            wireframe={true}
            transparent={true}
            opacity={0.3}
          />
        </TorusKnot>

        {/* Absolute Core Energy */}
        <Sphere args={[0.5, 8, 8]}>
          <meshBasicMaterial 
            color="#22c55e" 
            transparent={true}
            opacity={0.8}
          />
        </Sphere>

      </Float>
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas 
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1]} /* Hard clamp to 1x pixel ratio */
        performance={{ min: 0.1 }}
      >
        {/* Lights removed because meshBasicMaterial does not require lighting calculations! */}
        
        <TorusKnotObject />
      </Canvas>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground({ 
  leftSideOnly = false,
  orbCount = 4,
  geoCount = 10 
}: { 
  leftSideOnly?: boolean;
  orbCount?: number;
  geoCount?: number;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Suitable developer/design geometric objects
  const geometries = ["+", "◯", "△", "✕", "{ }", "< />"];
  const xMax = leftSideOnly ? 40 : 100;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blurred Neon Orbs */}
      {[...Array(orbCount)].map((_, i) => {
        const size = Math.random() * 300 + 150;
        return (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-[80px] opacity-100"
            style={{
              width: size,
              height: size,
              background: i % 2 === 0 ? "rgba(243, 254, 0, 0.35)" : "rgba(34, 197, 94, 0.25)",
              left: "-10%",
              top: "-10%"
            }}
            animate={{
              x: [`${Math.random() * xMax}vw`, `${Math.random() * xMax}vw`, `${Math.random() * xMax}vw`],
              y: [`${Math.random() * 150}vh`, `${Math.random() * 150}vh`, `${Math.random() * 150}vh`],
              scale: [1, 1.2, 0.9, 1]
            }}
            transition={{
              duration: Math.random() * 30 + 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "mirror"
            }}
          />
        );
      })}

      {/* Floating Geometric Objects */}
      {[...Array(geoCount)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute text-white/25 font-black flex items-center justify-center tracking-tighter"
          style={{
            fontSize: Math.random() * 40 + 24,
            left: "-5%",
            top: "-5%"
          }}
          animate={{
            x: [`${Math.random() * xMax}vw`, `${Math.random() * xMax}vw`, `${Math.random() * xMax}vw`],
            y: [`${Math.random() * 150}vh`, `${Math.random() * 150}vh`, `${Math.random() * 150}vh`],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 40 + 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {geometries[i % geometries.length]}
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import Image from "next/image";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, (latest) => `${latest}${suffix}`);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut", delay: 0.8 });
    return animation.stop;
  }, [count, value]);

  return <motion.span>{display}</motion.span>;
}

export default function WorksHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black py-20 px-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/works_hero.png" 
          alt="Works Hero Background" 
          fill
          priority
          className="object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-[#F3FE00] text-sm font-bold tracking-[0.3em] uppercase">
            — Selected Works
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            MAKING <span className="text-gray-500 italic font-light">DIGITAL</span><br />
            IMPACT.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed"
        >
          Explore a curated collection of projects where design meets performance. 
          From complex web systems to immersive 3D experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-12 pt-10"
        >
          <div className="text-center w-24">
            <p className="text-4xl font-bold text-white"><Counter value={10} suffix="+" /></p>
            <p className="text-xs text-[#F3FE00] uppercase tracking-widest font-bold mt-1">Projects</p>
          </div>
          <div className="w-px h-12 bg-gray-800" />
          <div className="text-center w-24">
            <p className="text-4xl font-bold text-white"><Counter value={100} suffix="%" /></p>
            <p className="text-xs text-[#F3FE00] uppercase tracking-widest font-bold mt-1">Satisfied</p>
          </div>
          <div className="w-px h-12 bg-gray-800" />
          <div className="text-center w-24">
            <p className="text-4xl font-bold text-white"><Counter value={2} suffix="+" /></p>
            <p className="text-xs text-[#F3FE00] uppercase tracking-widest font-bold mt-1">Years Exp</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F3FE00]/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}

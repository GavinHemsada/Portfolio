"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-black py-20 px-10">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/contact_hero.png" 
          alt="Contact Hero Background" 
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-[#F3FE00] text-sm font-bold tracking-[0.3em] uppercase">
            — REACH OUT
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            CONTACT <span className="text-gray-500 italic font-light">HUB.</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
        >
          Have a vision? Let&apos;s build it together. I&apos;m currently available for interesting projects and collaborations.
        </motion.p>
      </div>
    </section>
  );
}

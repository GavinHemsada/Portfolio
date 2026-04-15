"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react"; // Force cache reset
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

import Hero3DScene from "./Hero3DScene";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <header className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 w-full h-full max-w-full overflow-hidden">
        <Hero3DScene />
        {/* Gradient Overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none z-0"></div>
      </div>

      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-yellow-500/10 via-purple-600/10 to-blue-500/10 rounded-full opacity-60 blur-[120px] mix-blend-screen pointer-events-none"></div>

      <motion.div
        className="relative z-10 text-center space-y-8 px-4 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 text-sm text-gray-200 border border-gray-800/80 rounded-2xl sm:rounded-full pr-3 pl-1.5 py-1.5 bg-[#0a0a0a]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
            
            {/* Left Icon block */}
            <div className="bg-[#F3FE00] text-black w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(243,254,0,0.2)]">
              <FaCode size={16} />
            </div>

            {/* Text */}
            <span className="font-semibold tracking-wide px-1">Trusted to build scalable architectures with</span>

            {/* Tech Stack Icons (Overlapping) */}
            <div className="flex -space-x-3 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pt-1 sm:pt-0 pb-1 sm:pb-0">
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#121212] flex items-center justify-center z-[5] shrink-0">
                <FaReact size={14} className="text-[#61DAFB]" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#121212] flex items-center justify-center z-[4] shrink-0">
                <SiNextdotjs size={14} className="text-white" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#121212] flex items-center justify-center z-[3] shrink-0">
                <SiTypescript size={12} className="text-[#3178C6]" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#121212] flex items-center justify-center z-[2] shrink-0">
                <SiTailwindcss size={14} className="text-[#06B6D4]" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#121212] flex items-center justify-center z-[1] shrink-0">
                <FaNodeJs size={15} className="text-[#339933]" />
              </div>
            </div>

          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter max-w-[1200px] mx-auto uppercase">
          Creative <br />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
            Intelligence
          </span>
          <br />
          <span className="relative inline-block mt-2">
            In Every Pixel
            <motion.span 
              initial={{ rotate: -20, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 12, scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring", damping: 12 }}
              className="absolute -top-5 -right-10 md:-top-8 md:-right-14 bg-yellow-400 text-black text-[10px] md:text-sm font-extrabold px-3 py-1 md:py-1.5 rotate-12 rounded shadow-[0_0_25px_rgba(250,204,21,0.4)] border border-yellow-300"
            >
              New
            </motion.span>
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-gray-400 md:text-xl max-w-2xl mx-auto px-4 font-light leading-relaxed pt-2">
          I build dynamic and visually stunning digital experiences designed to highly scale your online presence.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
          <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            Explore My Work
          </button>
          <button className="group w-full sm:w-auto flex items-center justify-center space-x-3 border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300">
            <span>Watch Showreel</span>
            <div className="bg-white/20 group-hover:bg-black/10 rounded-full p-1.5 transition-colors">
              <Play size={14} className="fill-current" />
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-semibold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/40 via-white/10 to-transparent"
        />
      </motion.div>
    </header>
  );
}

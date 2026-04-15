"use client";

import { motion } from "framer-motion";
import { DiJavascript1, DiNodejs, DiReact, DiPython, DiJava, DiMongodb, DiGit, DiDatabase } from "react-icons/di";
import { SiSharp, SiDotnet, SiSpringboot, SiTypescript, SiNextdotjs, SiFlutter, SiMysql, SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const techIcons = [
  { Icon: DiJavascript1, label: "JavaScript" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: DiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: DiNodejs, label: "Node.js" },
  { Icon: DiPython, label: "Python" },
  { Icon: DiJava, label: "Java" },
  { Icon: SiSpringboot, label: "Spring Boot" },
  { Icon: SiSharp, label: "C#" },
  { Icon: SiDotnet, label: ".NET" },
  { Icon: SiFlutter, label: "Flutter" },
  { Icon: DiMongodb, label: "MongoDB" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: DiDatabase, label: "MSSQL" },
  { Icon: FaAws, label: "AWS" },
  { Icon: VscAzure, label: "Azure" },
  { Icon: DiGit, label: "Git" },
];

export default function TechStack() {
  return (
    <section className="bg-[#0a0a0a] py-16 border-y border-gray-800/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 mb-8">
        <h3 className="text-center text-sm font-semibold tracking-widest uppercase text-gray-500">
          PROUDLY BUILDING WITH THESE TECHNOLOGIES
        </h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex align-center">
        {/* Left/Right fading gradients to blend the edges smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust this for scrolling speed
          }}
        >
          {/* We render the icons twice to create the seamless infinite scroll effect */}
          {[...techIcons, ...techIcons].map((tech, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-10 text-white hover:text-[#F3FE00] transition-colors duration-300"
            >
              <tech.Icon className="h-12 w-12" />
              <span className="text-xl font-bold tracking-wider">{tech.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

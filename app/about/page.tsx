"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AboutHero from "../components/AboutHero";
import FlowingLinesBackground from "../components/FlowingLinesBackground";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaGithub, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiDotnet,
  SiFigma,
  SiRedis,
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const techStack = [
  { icon: <FaReact size={28} />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs size={28} />, name: "Next.js", color: "#ffffff" },
  { icon: <SiTypescript size={26} />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiTailwindcss size={28} />, name: "Tailwind", color: "#06B6D4" },
  { icon: <FaNodeJs size={28} />, name: "Node.js", color: "#339933" },
  { icon: <SiSpringboot size={26} />, name: "Spring Boot", color: "#6DB33F" },
  { icon: <SiDotnet size={26} />, name: "ASP.NET", color: "#512BD4" },
  { icon: <FaJava size={28} />, name: "Java", color: "#F89820" },
  { icon: <SiMongodb size={26} />, name: "MongoDB", color: "#47A248" },
  { icon: <SiPostgresql size={26} />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiRedis size={26} />, name: "Redis", color: "#DC382D" },
  { icon: <FaDocker size={28} />, name: "Docker", color: "#2496ED" },
  { icon: <SiFigma size={24} />, name: "Figma", color: "#F24E1E" },
  { icon: <FaGithub size={28} />, name: "GitHub", color: "#ffffff" },
];

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Tech Stacks" },
];

function CountUp({
  value,
  suffix = "",
  duration = 1.2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black scroll-smooth">
      <Navbar />
      <AboutHero />

      {/* ─── Bio Section ─────────────────────────────────────── */}
      <section className="relative bg-black py-24 px-8 md:px-16 overflow-hidden border-t border-gray-800/50">
        <FlowingLinesBackground />

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#F3FE00] text-sm font-bold tracking-[0.3em] uppercase">
              — WHO I AM
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
              A Developer <br />
              <span className="text-gray-500 italic font-light">
                with a Vision.
              </span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Hi! I am{" "}
                <span className="text-white font-semibold">Gavin Hemsada</span>,
                a full-stack developer based in{" "}
                <span className="text-[#F3FE00] font-semibold">
                  Piliyandala, Sri Lanka
                </span>
                . I build high-performance, scalable web applications that
                bridge beautiful design with solid engineering.
              </p>
              <p>
                My stack spans from polished React / Next.js frontends to robust
                Spring Boot and ASP.NET backends. I care deeply about clean
                code, developer experience, and shipping products that genuinely
                move the needle for clients.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source,
                studying new architecture patterns, or optimizing the last 10%
                of performance that makes the real difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Full-Stack Dev",
                "API Architect",
                "UI/UX Aware",
                "Open Source",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold tracking-wider uppercase border border-gray-700 rounded-full px-4 py-1.5 text-gray-300 hover:border-[#F3FE00] hover:text-[#F3FE00] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Profile Card */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-800/60 bg-gray-950 aspect-[3/4] max-w-[420px] mx-auto shadow-2xl">
              <img
                src="/face image.png"
                alt="Gavin Hemsada"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md border border-gray-700/50 rounded-2xl px-5 py-4">
                <p className="text-white font-bold text-lg">Gavin Hemsada</p>
                <p className="text-[#F3FE00] text-sm font-medium">
                  Full-Stack Developer · Sri Lanka
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-gray-400 text-xs">
                    Available for projects
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-[#F3FE00] rounded-full blur-[120px] opacity-[0.06] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ─── Stats Strip ─────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-y border-gray-800/50 py-14 px-8 md:px-16">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <p className="text-5xl md:text-6xl font-black text-[#F3FE00]">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Tech Stack ──────────────────────────────────────── */}
      <section className="bg-black py-24 px-8 md:px-16 border-b border-gray-800/50">
        <div className="max-w-[1440px] mx-auto space-y-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-[#F3FE00] text-sm font-bold tracking-[0.3em] uppercase">
              — TOOLS & TECHNOLOGIES
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              My Tech Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-gray-800/60 bg-gray-950 hover:border-gray-600 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <span
                  style={{ color: tech.color }}
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  {tech.icon}
                </span>
                <span className="text-gray-500 text-xs font-semibold group-hover:text-gray-300 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quote ───────────────────────────────────────────── */}
      <section className="relative bg-black py-24 px-8 text-center overflow-hidden border-t border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3FE00]/5 via-transparent to-[#22c55e]/5 pointer-events-none" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto space-y-6"
        >
          <p className="text-7xl text-[#F3FE00] font-black leading-none opacity-30">
            "
          </p>
          <blockquote className="text-2xl md:text-4xl font-semibold text-white leading-snug tracking-tight -mt-6">
            Strive to build things that create value{" "}
            <br className="hidden md:block" /> and solve{" "}
            <span className="text-[#F3FE00]">real problems</span>.
          </blockquote>
          <p className="text-gray-500 text-sm tracking-[0.3em] uppercase font-bold">
            — Gavin Hemsada
          </p>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

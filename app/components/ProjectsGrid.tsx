"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Sri Lanka Tours & Travels Web Application",
    category: "Next.js 16 Travel Platform",
    description:
      "A next-generation travel agency web app built with Next.js 16 (App Router) and TypeScript. Features complete bilingual support in English and Sinhala using next-intl, dynamic tour/destination detail pages with rich image galleries, advanced real-time search and filtering with pagination, and smooth page transitions powered by Framer Motion. Integrated with Supabase for data and authentication.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Framer Motion",
      "Supabase",
      "Tailwind CSS v4",
      "next-intl",
    ],
    image: "/projects/travel.png",
    github: "https://github.com/GavinHemsada/travalling_application",
    live: "https://travalling-application.vercel.app/",
    year: "2024",
  },
  {
    title: "Electo Volt E-Commerce Platform",
    category: "MERN Stack EV Marketplace",
    description:
      "A production-grade, full-stack e-commerce ecosystem exclusively for the EV market. Supports four distinct user roles — Buyers, Sellers, Financial Staff, and Admins — each with dedicated dashboards. Features real-time ML pipeline using ONNX Runtime for battery health prediction, Recharts data visualizations, map-based services via Leaflet, and PDF report generation.",
    tech: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "ONNX Runtime",
      "Recharts",
    ],
    image: "/projects/ev.png",
    github: "https://github.com/GavinHemsada/Final-Year-Project-Ev-shop",
    live: "https://final-year-project-ev-shop.vercel.app/",
    year: "2024",
  },
  {
    title: "RAG System — AI Document Q&A Platform",
    category: "Next.js + Python AI Integration",
    description:
      "A production-ready RAG system that transforms static documents into an interactive, queryable knowledge base. Users upload PDFs, TXTs, or DOCXs which are chunked, vectorized using Google Gemini embeddings, and stored in Qdrant vector database. Questions are answered by Gemini 1.5 Flash with context from relevant document chunks. Backend built with FastAPI and containerized with Docker.",
    tech: [
      "Next.js",
      "Python",
      "FastAPI",
      "Docker",
      "Qdrant",
      "Google Gemini",
      "Framer Motion",
      "Tailwind CSS",
    ],
    image: "/projects/rag.png",
    github: "https://github.com/GavinHemsada/Rag_system",
    live: "https://rag-system-puce.vercel.app/",
    year: "2023",
  },
  {
    title: "Next.js Admin Dashboard",
    category: "Full Stack Admin Panel",
    description:
      "A Next.js admin dashboard with authentication features including Login and Register pages. The frontend is built with Next.js for server-side rendering and optimal performance, while the backend is connected to MongoDB for user management and data persistence.",
    tech: ["Next.js", "MongoDB", "Authentication", "Responsive Design"],
    image: "/projects/nextDashbord.png",
    github: "https://github.com/GavinHemsada/Next.js-Admin-Dashboard",
    live: "https://next-js-admin-dashboard-swart.vercel.app/",
    year: "2023",
  },
  {
    title: "Eye Clinic Management System",
    category: "PHP + MySQL Healthcare App",
    description:
      "A comprehensive web-based application designed to streamline eye clinic operations. Manages patient records, appointments, billing, and stakeholder communication. Features user-friendly interface with HTML, Bootstrap 5, and JavaScript, secure PHP backend, PayPal payment gateway integration, and SMTP email notifications.",
    tech: [
      "PHP",
      "MySQL",
      "HTML",
      "Bootstrap 5",
      "JavaScript",
      "PayPal API",
      "SMTP",
    ],
    image: "/projects/eagle_care.png",
    github: "https://github.com/GavinHemsada/Group_project",
    live: "#",
    year: "2022",
  },
  {
    title: "Face and Eye Detection System",
    category: "Python TensorFlow AI",
    description:
      "A real-time Face and Eye Detection System combined with Emotion Classification for monitoring virtual interviews. Implements OpenCV for accurate facial region and eye movement tracking, and a CNN-based emotion classifier trained on FER-2013 dataset using Keras and TensorFlow to flag suspicious behaviors or emotional anomalies.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "CNN",
      "FER-2013 Dataset",
    ],
    image: "/projects/face.png",
    github: "https://github.com/GavinHemsada/Face-and-Eye-Detection-System",
    live: "https://face-and-eye-detection-system.vercel.app/",
    year: "2022",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ProjectsGrid() {
  return (
    <section className="bg-black py-24 px-8 md:px-16 border-t border-gray-800/50">
      <div className="max-w-[1440px] mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4 mb-20"
        >
          <p className="text-[#F3FE00] text-sm font-bold tracking-[0.3em] uppercase">
            — SELECTED WORKS
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            Projects I've <br />
            <span className="text-gray-600 italic font-light">
              Built & Shipped.
            </span>
          </h2>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-40"
        >
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={project.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center ${
                  isEven ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* ── Image Block ── */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.85,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  }}
                  className="relative group"
                >
                  <div className="relative rounded-3xl overflow-hidden aspect-video border border-gray-800/60 shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Year badge */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-gray-700 rounded-full px-3 py-1 text-xs text-gray-300 font-mono">
                      {project.year}
                    </div>

                    {/* Hover links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        <FaGithub size={16} /> GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#F3FE00] text-black px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Glow */}
                  <div className="absolute -inset-4 rounded-3xl bg-[#F3FE00] opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 pointer-events-none -z-10" />
                </motion.div>

                {/* ── Text Block ── */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.85,
                    delay: 0.12,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  }}
                  className="space-y-6"
                >
                  <p className="text-[#F3FE00] text-xs font-bold tracking-[0.25em] uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold tracking-wide border border-gray-700/60 rounded-full px-3 py-1.5 text-gray-400 bg-gray-900/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 border border-gray-700 hover:border-white text-gray-300 hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                    >
                      <FaGithub size={16} />
                      View Code
                      <ArrowUpRight
                        size={14}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 bg-[#F3FE00] text-black px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                      <ArrowUpRight
                        size={14}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

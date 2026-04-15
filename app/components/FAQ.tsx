"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is included in the Design & Development service?",
    answer: "I provide comprehensive solutions from UI/UX design in Figma to full-stack development using modern technologies like React, Next.js, and Node.js. Every project includes responsive layouts, SEO optimization, and high-performance code as standard."
  },
  {
    question: "How long does it take for the final delivery?",
    answer: "Timeline varies by project scope. A standard landing page typically takes 1-2 weeks, while complex full-stack applications or custom software solutions usually range from 4 to 8 weeks including testing and deployment."
  },
  {
    question: "Can you integrate my brand guidelines and legacy databases?",
    answer: "Absolutely. I specialize in building custom design systems that reflect your brand identity. I also have deep expertise in integrating existing MSSQL, PostgreSQL, and MySQL databases into modern web frontends."
  },
  {
    question: "Do you offer cloud deployment and maintenance?",
    answer: "Yes, I handle the entire deployment pipeline using AWS or Azure infrastructure. I also offer ongoing maintenance plans to ensure your application stays secure, updated, and optimized for peak performance."
  },
  {
    question: "How do we get started with a new project?",
    answer: "We start with a discovery call to discuss your goals. Following that, I'll provide a detailed proposal and timeline. Once approved, we move into the design phase, followed by development with regular updates."
  }
];

import AnimatedBackground from "./AnimatedBackground";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-black text-white py-24 px-8 md:px-16 border-t border-gray-800/50">
      <AnimatedBackground />
      <div className="relative z-10 max-w-[1290px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Header */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <p className="text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase">
              — COMMON QUESTIONS
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Curiosity <br /> meets clarity.
            </h2>
          </div>
          
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Everything you need to know about my process, technology stack, and how I can help your business grow.
          </p>
          
          <div className="pt-4">
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
            >
              Still have questions?
            </a>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            
            return (
              <div 
                key={i} 
                className={`group border rounded-3xl transition-all duration-500 overflow-hidden ${
                  isOpen 
                  ? "bg-gray-900/40 border-gray-700 shadow-2xl shadow-yellow-400/5" 
                  : "bg-transparent border-gray-800 hover:border-gray-700"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
                >
                  <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen ? "bg-yellow-400 text-black rotate-180" : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"
                  }`}>
                    {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-8">
                        <div className="h-px w-12 bg-yellow-400/30 mb-6" />
                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

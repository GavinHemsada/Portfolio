"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiFiverr } from "react-icons/si";

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

const contactCards = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "gavinhemsada@gmail.com",
    sub: "Reply within 24 hours",
    href: "mailto:gavinhemsada@gmail.com",
    color: "#F3FE00",
  },
  {
    icon: <FaWhatsapp size={24} />,
    label: "WhatsApp",
    value: "+94 77 123 4567",
    sub: "Available 9AM – 9PM IST",
    href: "https://wa.me/94771234567",
    color: "#25D366",
  },
  {
    icon: <MapPin size={24} />,
    label: "Location",
    value: "Piliyandala, Sri Lanka",
    sub: "Open to remote worldwide",
    href: "#",
    color: "#60a5fa",
  },
  {
    icon: <Clock size={24} />,
    label: "Working Hours",
    value: "Mon – Sat, 9AM – 8PM",
    sub: "IST (UTC +5:30)",
    href: "#",
    color: "#a78bfa",
  },
];

const socialLinks = [
  {
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    handle: "@gavinhemsada",
    href: "https://linkedin.com/in/gavinhemsada",
    color: "#0A66C2",
  },
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    handle: "@GavinHemsada",
    href: "https://github.com/GavinHemsada",
    color: "#ffffff",
  },
  {
    icon: <SiGmail size={20} />,
    label: "Gmail",
    handle: "gavinhemsada@gmail.com",
    href: "mailto:gavinhemsada@gmail.com",
    color: "#EA4335",
  },
  {
    icon: <SiFiverr size={20} />,
    label: "Fiverr",
    handle: "@gavinhemsada",
    href: "https://fiverr.com/gavinhemsada",
    color: "#1DBF73",
  },
];

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Most projects take 2–6 weeks depending on scope. I always provide a detailed estimate upfront before starting.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely! I work with clients globally across Europe, North America, Asia, and the Middle East.",
  },
  {
    q: "What is your development process?",
    a: "I follow an Agile-inspired process: Discovery → Design → Development → Testing → Launch. You get regular updates throughout.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, I offer flexible maintenance & support packages after every project delivery to keep things running smoothly.",
  },
];

export default function ContactExtras() {
  return (
    <>
      {/* ─── Availability Strip ──────────────────────────────── */}
      <section className="bg-[#F3FE00] py-5 px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-black animate-pulse" />
            <p className="text-black font-bold text-sm md:text-base tracking-wide">
              Currently available for new projects & collaborations
            </p>
          </div>
          <a
            href="mailto:gavinhemsada@gmail.com"
            className="flex items-center gap-2 bg-black text-[#F3FE00] text-sm font-bold px-5 py-2.5 rounded-full hover:scale-105 transition-transform whitespace-nowrap"
          >
            Start a Project <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* ─── Contact Method Cards ────────────────────────────── */}
      <section className="bg-black py-24 px-8 md:px-16 border-b border-gray-800/50">
        <div className="max-w-[1440px] mx-auto space-y-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-[#F3FE00] text-sm font-bold tracking-[0.3em] uppercase">
              — GET IN TOUCH
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Ways to Reach Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-800/60 bg-gray-950 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${card.color}18`,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">
                    {card.label}
                  </p>
                  <p className="text-white font-bold text-sm leading-snug">
                    {card.value}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{card.sub}</p>
                </div>
                <div
                  className="flex items-center gap-1 text-xs font-semibold mt-auto"
                  style={{ color: card.color }}
                >
                  <span>Connect</span>
                  <ArrowUpRight
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social Links Row ────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-16 px-8 md:px-16 border-b border-gray-800/50">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="space-y-2">
              <p className="text-[#F3FE00] text-sm font-bold tracking-[0.3em] uppercase">
                — FIND ME ONLINE
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Let's Connect on Social
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-800 bg-gray-950 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                >
                  <span style={{ color: s.color }}>{s.icon}</span>
                  <div>
                    <p className="text-white text-sm font-bold leading-none">
                      {s.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.handle}</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-gray-600 group-hover:text-white ml-2 transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="bg-black py-24 px-8 md:px-16 border-b border-gray-800/50">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:sticky md:top-24"
          >
            <p className="text-[#F3FE00] text-sm font-bold tracking-[0.3em] uppercase">
              — QUICK ANSWERS
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              Before You <br /> Reach Out
            </h2>
            <p className="text-gray-400 leading-relaxed">
              These are the most common questions I get. Still have something
              specific? Just drop me a message below!
            </p>
            <div className="flex items-center gap-3 mt-4 text-gray-300">
              <MessageCircle size={16} className="text-[#F3FE00]" />
              <span className="text-sm font-medium">
                Usually reply within{" "}
                <strong className="text-white">24 hours</strong>
              </span>
            </div>
          </motion.div>

          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="border border-gray-800/60 rounded-2xl p-6 bg-gray-950 hover:border-gray-700 transition-colors"
              >
                <p className="text-white font-semibold mb-2">{faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

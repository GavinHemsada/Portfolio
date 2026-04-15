"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const items = [
  {
    title: "Discovery",
    subtitle: "Requirements & Business Goals",
    description:
      "I start by understanding your business, users, and project goals. We define core features, success metrics, and technical constraints so the product solves real problems from day one.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Planning",
    subtitle: "Architecture & Roadmap",
    description:
      "Next, I design the technical architecture, break the work into milestones, and plan the delivery timeline. This keeps development predictable, scalable, and aligned with your priorities.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Design",
    subtitle: "UI/UX System",
    description:
      "I create wireframes and polished UI designs that match your brand and user needs. Every screen and interaction is structured to be intuitive, accessible, and conversion-focused.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Development",
    subtitle: "Frontend & Backend Build",
    description:
      "I implement the product using modern technologies for performance and maintainability. This includes APIs, database models, business logic, and responsive interfaces.",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Testing",
    subtitle: "QA, Security & Optimization",
    description:
      "Before launch, I run functional checks, responsiveness testing, performance tuning, and bug fixes. The goal is a stable, secure, and fast product ready for real users.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Launch",
    subtitle: "Deployment & Ongoing Support",
    description:
      "I deploy your application, configure production services, and monitor health after release. Post-launch, I provide updates, improvements, and support to help your product keep growing.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
];

type ProcessStep = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

type ProcessItemProps = {
  item: ProcessStep;
  index: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
};

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="bg-[#0a0a0a] text-white py-16 md:py-0">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Mobile View: Stacked Animated */}
        <div className="md:hidden space-y-16">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#F3FE00] text-sm font-semibold tracking-wider uppercase">
              — SOFTWARE PROCESS
            </p>
            <h2 className="text-4xl font-bold">From Idea To Production</h2>
          </motion.div>

          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex gap-4 items-start">
                <span className="text-xl font-bold text-gray-500 py-1">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
              <div className="w-full h-[300px] rounded-3xl overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View: Sticky Scroll */}
        <div className="hidden md:flex relative items-start gap-16 py-16">
          {/* Left Column (Scrolling) */}
          <div className="w-1/2 space-y-[20vh] pb-[20vh]">
            <div className="space-y-4 pt-10">
              <p className="text-[#F3FE00] text-sm font-semibold tracking-wider uppercase">
                — SOFTWARE PROCESS
              </p>
              <h2 className="text-5xl font-bold mb-16">
                From Idea To Production
              </h2>
            </div>

            <div className="relative pl-16 md:pl-24" ref={containerRef}>
              {/* Vertical Progress Line */}
              <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[4px] bg-gray-800 rounded-full"></div>

              {/* Active Fill Line */}
              <motion.div
                className="absolute left-6 md:left-10 top-0 bottom-0 w-[4px] bg-[#F3FE00] origin-top rounded-full"
                style={{ scaleY: scrollYProgress }}
              />

              <div className="space-y-[15vh]">
                {items.map((item, idx) => (
                  <ProcessItem
                    key={idx}
                    item={item}
                    index={idx}
                    setActiveIndex={setActiveIndex}
                    isActive={activeIndex === idx}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Sticky Image) */}
          <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-gray-800 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={items[activeIndex].image}
                  alt={items[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessItem({
  item,
  index,
  setActiveIndex,
  isActive,
}: ProcessItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px", // Trigger when element is near middle of viewport
        threshold: 0,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [index, setActiveIndex]);

  return (
    <div
      ref={ref}
      className={`relative transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-30"
      }`}
    >
      {/* Number placed specifically to the left of the line */}
      <div className="absolute -left-16 md:-left-24 top-1 w-8 text-right">
        <span
          className={`text-xl font-bold ${
            isActive ? "text-white" : "text-gray-500"
          }`}
        >
          {(index + 1).toString().padStart(2, "0")}
        </span>
      </div>

      <div className="mb-4">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {item.title}
        </h3>
        <p className="text-gray-400 text-lg">{item.subtitle}</p>
      </div>
      <p className="text-gray-400 text-lg leading-relaxed max-w-md">
        {item.description}
      </p>
    </div>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AnimatedBackground from "../components/AnimatedBackground";
import { services } from "@/app/data/services";

export const metadata = {
  title: "Services | DevByGavin",
  description:
    "Explore all digital services from Gavin, including web design, web development, API development, optimization, and full-stack solutions.",
};

export default function ServicesPage() {
  const featuredService = services[0];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black scroll-smooth">
      <Navbar />

      <section className="relative overflow-hidden border-b border-gray-800/60 bg-[#090909] py-20 md:py-24">
        <AnimatedBackground orbCount={2} geoCount={6} />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-sm font-semibold tracking-[0.28em] text-[#F3FE00] uppercase">
              Services
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Six Focused Services
              <br />
              Built for Growth
            </h1>
            <p className="mx-auto max-w-3xl text-gray-400 text-base md:text-lg leading-relaxed lg:mx-0">
              Choose the service that matches your goal. Each area is delivered
              with clear strategy, robust implementation, and measurable
              business impact.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-800/70">
            <img
              src={featuredService.heroImage}
              alt={`${featuredService.title} service preview`}
              className="h-[320px] w-full object-cover md:h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#F3FE00]">
                  Featured Service
                </p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {featuredService.title}
                </h2>
              </div>
              <span className="shrink-0 rounded-full border border-white/20 bg-black/50 p-3 text-white">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-20 px-6 md:px-12">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-2xl border border-gray-800/70 bg-[#101010] transition-all duration-500 hover:border-[#F3FE00]/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F3FE00]">
                      {service.subtitle}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/15 bg-black/50 p-3 text-white transition-colors group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import { getServiceBySlug, services } from "@/app/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | DevByGavin",
    };
  }

  return {
    title: `${service.title} | Services | DevByGavin`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black scroll-smooth">
      <Navbar />

      <section className="border-b border-gray-800/60 bg-[#090909] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1200px] space-y-8">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F3FE00]">
                {service.subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="max-w-2xl text-gray-300 leading-relaxed text-lg">
                {service.intro}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-800/70">
              <img
                src={service.heroImage}
                alt={service.title}
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20 bg-black">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What You Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-800 bg-[#101010] p-4 text-gray-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 text-[#F3FE00]"
                      />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Delivery Process</h2>
              <ol className="space-y-3">
                {service.process.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 rounded-xl border border-gray-800 bg-[#0e0e0e] p-4"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F3FE00] text-xs font-bold text-black">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-gray-800/70">
              <img
                src={service.detailImage}
                alt={`${service.title} details`}
                className="h-[300px] w-full object-cover"
              />
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#101010] p-6 space-y-4">
              <h3 className="text-2xl font-bold">Expected Outcomes</h3>
              <ul className="space-y-3 text-gray-300">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#F3FE00]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#F3FE00]/30 bg-[#151700] p-6 text-black">
              <p className="text-sm uppercase tracking-[0.2em] text-black/70 font-semibold">
                Ready to Start
              </p>
              <h3 className="mt-2 text-2xl font-black text-black">
                Let&apos;s Build Your Next Product
              </h3>
              <p className="mt-3 text-sm text-black/80 leading-relaxed">
                Need this service for your business? Reach out and I&apos;ll
                provide a practical roadmap with timeline and scope.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-[#F3FE00] transition-colors hover:bg-gray-900"
              >
                Discuss Your Project
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-[1200px] space-y-5 rounded-2xl border border-gray-800 bg-[#0f0f0f] p-7 md:p-10">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-800/80 bg-black/40 p-5"
              >
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

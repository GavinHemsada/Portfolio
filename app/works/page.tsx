import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: {
    canonical: "/works",
  },
  title: "Projects by Gavin | Software Engineer & Developer",
  description:
    "Explore the portfolio projects of Gavin (Gavin Hemsada), a software engineer and developer in Sri Lanka. See web development, software, and engineering works.",
  keywords: [
    "Gavin",
    "Gavin Hemsada",
    "projects",
    "works",
    "software engineer",
    "software developer",
    "Sri Lanka",
    "web development",
    "portfolio",
    "I need a high-converting landing page for a SaaS startup",
    "Looking for a real estate landing page designer for lead generation",
    "Healthcare landing page expert for HIPAA compliant medical services",
    "E-commerce product landing page to drive high-volume sales",
    "Law firm landing page design to capture legal consultations",
    "Dental practice landing page for new patient appointments",
    "Fitness and wellness landing page for online coaching programs",
    "Cryptocurrency and NFT landing page for project launches",
    "Affiliate marketing landing page with direct response copy",
    "Educational course landing page for webinar registrations",
    "Non-profit donation landing page to increase fundraising",
    "Tech startup landing page design like Stripe or Notion",
    "B2B enterprise landing page for long-cycle sales funnels",
    "Solar energy landing page for lead generation and quotes",
    "Pet niche landing page for e-commerce subscription products",
    "Travel agency landing page for exclusive holiday bookings",
    "Financial services landing page for investment consulting",
    "Insurance landing page to generate daily leads and quotes",
    "Interior design portfolio landing page to showcase projects",
    "Photography landing page for booking wedding sessions",
    "Fashion brand landing page for seasonal collection launches",
    "Beauty and cosmetics landing page for influencers and brands",
    "Home services landing page for plumbing and HVAC leads",
    "Author landing page for book pre-order and launch events",
    "Fintech landing page for banking and digital payment apps",
  ],
  openGraph: {
    title: "Projects by Gavin | Software Engineer & Developer",
    description:
      "Explore the portfolio projects of Gavin (Gavin Hemsada), a software engineer and developer in Sri Lanka.",
    url: "https://gavinhemsandaportfolio.netlify.app/works",
    siteName: "DevByGavin Portfolio",
    images: ["/logo_with_blackbg.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by Gavin | Software Engineer & Developer",
    description:
      "Explore the portfolio projects of Gavin (Gavin Hemsada), a software engineer and developer in Sri Lanka.",
    images: ["/logo_with_blackbg.png"],
  },
};
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Showcase from "../components/Showcase";
import WorksHero from "../components/WorksHero";
import ProjectsGrid from "../components/ProjectsGrid";

export default function Works() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black scroll-smooth">
      <Navbar />
      <WorksHero />
      <ProjectsGrid />
      <Showcase />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

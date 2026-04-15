import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Process from "./components/Process";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "Gavin | Software Engineer & Developer in Sri Lanka",
  description:
    "Welcome to the portfolio of Gavin (Gavin Hemsada), a professional software engineer and developer in Sri Lanka. Explore projects, skills, and services in modern web development.",
  keywords: [
    "Gavin",
    "Gavin Hemsada",
    "software engineer",
    "software developer",
    "software",
    "full-stack developer",
    "Sri Lanka",
    "Next.js",
    "React",
    "Spring Boot",
    "ASP.NET",
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
    "Fintech landing page for banking and digital payment apps"
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black scroll-smooth relative">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Showcase />
      <Process />
      <Banner />
      <FAQ />
      <Insights />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

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

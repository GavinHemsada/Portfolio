import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactSection from "../components/Contact";
import ContactHero from "../components/ContactHero";
import ContactExtras from "../components/ContactExtras";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black scroll-smooth">
      <Navbar />
      <ContactHero />
      <ContactExtras />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

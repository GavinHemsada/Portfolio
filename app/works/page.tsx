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

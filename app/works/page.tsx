export const metadata = {
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
    "portfolio"
  ],
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

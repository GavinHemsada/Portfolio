import { ArrowUpRight } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

export default function Services() {
  const services = [
    { subtitle: "FOR DIGITAL EXPERIENCES", title: "Web Design", image: "https://images.unsplash.com/photo-1561070791-2526d3098f71?q=80&w=1000&auto=format&fit=crop" },
    { subtitle: "FOR ONLINE BUSINESSES", title: "Web Development", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" },
    { subtitle: "FOR SCALABLE INTEGRATIONS", title: "API Development", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" },
    { subtitle: "FOR HIGH SPEED DELIVERY", title: "Website Performance Optimization", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
    { subtitle: "FOR END-TO-END SOLUTIONS", title: "Full Stack Developer", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" },
    { subtitle: "FOR CUSTOM APPLICATIONS", title: "Software Developer", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-white py-16 border-t border-gray-800/50">
      <AnimatedBackground orbCount={3} geoCount={8} />
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 space-y-20">
        
        <div className="space-y-4 text-center">
          <p className="text-[#F3FE00] text-sm font-semibold tracking-wider uppercase">WHAT I DO</p>
          <h2 className="text-4xl md:text-5xl font-bold">Comprehensive Digital Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-0">
          {services.map((srv, i) => (
            <div 
              key={i} 
              className="group relative flex items-center justify-between py-12 px-6 -mx-6 border-b border-gray-800/50 cursor-pointer overflow-hidden transition-all duration-500"
            >
              {/* Hover Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-0 pointer-events-none rounded-xl"
                style={{ backgroundImage: `url(${srv.image})` }}
              />
              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none rounded-xl" />

              <div className="space-y-3 relative z-10 transition-transform duration-500 group-hover:translate-x-4">
                <span className="text-gray-300 font-semibold text-xs tracking-wider uppercase">
                  {srv.subtitle}
                </span>
                <h3 className="text-3xl font-bold text-gray-100 group-hover:text-white transition-colors">
                  {srv.title}
                </h3>
              </div>
              
              <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 text-gray-400 group-hover:bg-white group-hover:text-black transition-all duration-500 shrink-0 group-hover:-translate-x-4">
                <ArrowUpRight size={24} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

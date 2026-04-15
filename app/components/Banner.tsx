import { ArrowUpRight } from "lucide-react";
import AiBotCanvas from "./AiBotCanvas";

export default function Banner() {
  return (
    <section className="relative w-full py-16 px-10 bg-[#060606] text-white overflow-hidden">
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.20] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" 
        }} 
      />
      
      {/* Radial Gradient Glows matching the screenshot */}
      <div className="absolute top-[-30%] left-[-10%] w-[300px] h-[300px] bg-[#F3FE00] rounded-full blur-[30px] pointer-events-none" />
      <div className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] bg-[#F3FE00] rounded-full blur-[150px]  pointer-events-none" />

      <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-[#22c55e] rounded-full blur-[50px]  pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#22c55e] rounded-full blur-[150px]  pointer-events-none" />

      <div className="absolute top-[-10%] right-[-5%] w-[200px] h-[200px] bg-[#22c55e] rounded-full blur-[50px]  pointer-events-none" />
      <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] bg-[#22c55e] rounded-full blur-[150px]  pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content Area */}
        <div className="space-y-8 max-w-2xl text-left py-10">
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Design That Thinks. <br/> Interfaces That Feel.
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
            At DevByGavin, I craft AI-ready design systems for modern software responsive, scalable, and human-centered.
          </p>
          
          <button className="bg-[#F3FE00] text-black px-8 py-3.5 rounded-full font-bold flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95 w-max">
            <span>See AI in Action</span>
            <ArrowUpRight size={20} strokeWidth={3} />
          </button>
        </div>

        {/* Right Content Area (3D AI Bot Canvas) */}
        <div className="mt-12 md:mt-0 relative w-64 h-64 md:w-[450px] md:h-[450px]">
           <AiBotCanvas />
        </div>

      </div>
    </section>
  );
}

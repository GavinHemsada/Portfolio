"use client";

export default function Showcase() {
  return (
    <section className="relative bg-black py-24 border-t border-gray-800/50">
      <div className="flex flex-col items-center justify-center overflow-hidden w-full">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 px-4 max-w-[1440px] mx-auto">
          <p className="text-[#F3FE00] text-sm font-semibold tracking-widest uppercase">
            — MY PROJECTS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            My Creative Showcase
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base pt-2">
            Watch my latest development works, scalable architectures, and interactive designs in action.
          </p>
        </div>

        {/* Full Width Video wrapper */}
        <div className="relative w-full h-[50vh] md:h-[80vh] bg-gray-950 border-y border-gray-800/60 overflow-hidden">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="auto"
            className="w-full h-full object-cover pointer-events-none"
          >
            <source src="/showcase_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Subtle shadows bridging the edges into the site background */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

export default function Insights() {
  const blogs = [
    {
      img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop",
      title: "Moving Beyond Disk: How Redis Supercharges Your App Performance",
      date: "Jan 12, 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      title:
        "Your API Is Returning Too Much Data And It's Costing You Performance",
      date: "Jan 08, 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      title: "Web 3.0: What It Means for Future UI/UX Patterns",
      date: "Jan 03, 2024",
    },
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-white py-16 px-10 overflow-hidden">
      <AnimatedBackground orbCount={2} geoCount={4} />
      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <p className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
              — BLOG
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Insights That Inspire <br /> Vision Forward
            </h2>
          </div>
          <a
            href="https://medium.com/@gavinhemsada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="w-full h-64 bg-gray-800 rounded-3xl overflow-hidden mb-6 border border-gray-800">
                <img
                  src={b.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Blog"
                />
              </div>
              <div className="space-y-3 px-2">
                <p className="text-sm text-gray-500 font-mono">{b.date}</p>
                <h3 className="text-xl font-semibold leading-snug group-hover:text-yellow-400 transition-colors">
                  {b.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400 pt-2 font-medium">
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

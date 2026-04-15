import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 px-10 border-t border-gray-900 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F3FE00]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/2" />
       
      {/* Big Brand Mark */}
      <div className="w-full flex justify-center items-center py-10 md:py-16 select-none overflow-hidden relative">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes shine {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
          .animate-shine {
            animation: shine 15s linear infinite;
          }
        `}} />
        <span className="text-[15vw] xl:text-[200px] font-black leading-[1] tracking-tighter whitespace-nowrap text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,45%,#F3FE00,55%,#ffffff)] bg-[length:200%_100%] animate-shine">
          DEV BY GAVIN
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-12">
          
          {/* Brand & CTA Section */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let&apos;s build something <br />
              <span className="text-[#F3FE00]">extraordinary</span> together.
            </h2>
            <Link 
              href="/contact"
              className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#F3FE00] transition-all duration-300"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Navigation</h4>
              <ul className="space-y-4 font-medium text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/works" className="hover:text-white transition-colors">Works</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Social</h4>
              <ul className="space-y-4 font-medium text-gray-400">
                <li>
                  <a href="https://linkedin.com/in/gavinhemsada" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
                    <FaLinkedinIn size={16} />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/GavinHemsada" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
                    <FaGithub size={16} />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Locally Based</h4>
              <p className="text-gray-400 leading-relaxed font-medium">
                Piliyandala,<br />
                Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-1 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest uppercase text-gray-600">
          <p>© {currentYear} DEVBYGAVIN. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-[#F3FE00] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F3FE00] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

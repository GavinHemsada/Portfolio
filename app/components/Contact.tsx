"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail, SiFiverr } from "react-icons/si";
import AnimatedBackground from "./AnimatedBackground";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.details.trim()) newErrors.details = "Project details are required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", details: "" });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24 px-10 border-t border-gray-800/50 overflow-hidden">
      <AnimatedBackground orbCount={3} geoCount={8} />
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">— START A PROJECT</p>
            <h2 className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tighter">Let&apos;s Work On What You Care About.</h2>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-yellow-400/20 overflow-hidden shadow-lg shadow-yellow-400/5">
                <img src="/face image.png" alt="Gavin Hemsada" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-tight">Gavin Hemsada</p>
                <p className="text-xs text-gray-400 font-medium">Software Developer</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 text-gray-400 font-medium">
            <p className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-yellow-400 text-sm font-bold">✓</span>
              <span>Guaranteed results within deadlines.</span>
            </p>
            <p className="flex items-center space-x-4">
              <span className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-yellow-400 text-sm font-bold">✓</span>
              <span>100% Client Satisfaction</span>
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">Follow My Journey</p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 md:gap-4">
              <a 
                href="https://linkedin.com/in/gavinhemsada"
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex justify-center items-center bg-gray-900/50 border border-gray-800 px-5 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-[#F3FE00] hover:to-[#22c55e] hover:text-black transition-all duration-300 min-w-[56px]"
              >
                <FaLinkedinIn size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="max-w-0 opacity-0 group-hover:max-w-24 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm sm:text-base">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/GavinHemsada" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex justify-center items-center bg-gray-900/50 border border-gray-800 px-5 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-[#F3FE00] hover:to-[#22c55e] hover:text-black transition-all duration-300 min-w-[56px]"
              >
                <FaGithub size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="max-w-0 opacity-0 group-hover:max-w-24 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm sm:text-base">GitHub</span>
              </a>
              <a 
                href="mailto:gavinhemsada@gmail.com" 
                className="group flex justify-center items-center bg-gray-900/50 border border-gray-800 px-5 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-[#F3FE00] hover:to-[#22c55e] hover:text-black transition-all duration-300 min-w-[56px]"
              >
                <SiGmail size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="max-w-0 opacity-0 group-hover:max-w-24 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm sm:text-base">GMail</span>
              </a>
               <a 
                href="https://www.fiverr.com/s/VYWLGde" 
                className="group flex justify-center items-center bg-gray-900/50 border border-gray-800 px-5 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-[#F3FE00] hover:to-[#22c55e] hover:text-black transition-all duration-300 min-w-[56px]"
              >
                <SiFiverr size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="max-w-0 opacity-0 group-hover:max-w-24 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold text-sm sm:text-base">Fiverr</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-gray-800">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 py-12 text-center">
              <div className="w-20 h-20 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-gray-400">Thanks for reaching out G. I&apos;ll get back to you shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-yellow-400 font-bold hover:underline mt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wider flex justify-between">
                  Your Name
                  {errors.name && <span className="text-red-500 lowercase font-normal italic">{errors.name}</span>}
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-gray-800'} p-2 text-white focus:outline-none focus:border-yellow-400 transition-colors`} 
                  placeholder="Full Name" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wider flex justify-between">
                  Email Address
                  {errors.email && <span className="text-red-500 lowercase font-normal italic">{errors.email}</span>}
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-gray-800'} p-2 text-white focus:outline-none focus:border-yellow-400 transition-colors`} 
                  placeholder="hello@example.com" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wider">Company</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-800 p-2 text-white focus:outline-none focus:border-yellow-400 transition-colors" 
                  placeholder="Company Name" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wider flex justify-between">
                  Project Details
                  {errors.details && <span className="text-red-500 lowercase font-normal italic">{errors.details}</span>}
                </label>
                <textarea 
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.details ? 'border-red-500' : 'border-gray-800'} p-2 text-white focus:outline-none focus:border-yellow-400 transition-colors h-24 resize-none`} 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full border ${isSubmitting ? 'bg-gray-800 border-transparent text-gray-400 cursor-not-allowed' : 'bg-transparent border-[#F3FE00] text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#F3FE00] hover:to-[#22c55e] hover:text-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]'} rounded-full py-4 font-bold flex items-center justify-center transition-all duration-300 mt-4`}
              >
                <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
              </button>
              <p className="text-center text-xs text-gray-600 mt-4">I usually reply within 24 hours.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

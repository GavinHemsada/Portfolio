import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94718721716"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-110 hover:bg-green-400 transition-all duration-300 flex items-center justify-center animate-bounce group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 -z-10 group-hover:animate-none"></div>
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}

"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const phone = "919324172409"; // Replace with your number
  const message = encodeURIComponent(
    "Hi Aptechnosys, I'm interested in discussing my project."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-[9999] group"
    >
      <div className="relative">
        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>

        {/* Button */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-2xl hover:scale-110 transition-all duration-300">
          <FaWhatsapp className="text-white text-4xl" />
        </div>
      </div>
    </a>
  );
}
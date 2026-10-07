import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = 'https://wa.me/8801347456436?text=' + encodeURIComponent('আসসালামু আলাইকুম, আমি নববী একাডেমির কোর্স সম্পর্কে জানতে চাচ্ছি।');

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#0F3D32] hover:bg-[#0A2922] text-[#FBF7EC] border border-[#D8B45E]/70 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D8B45E]"
        aria-label="WhatsApp এ সরাসরি কথা বলুন 01347-456436"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8B45E] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D8B45E]"></span>
        </span>
        
        <MessageCircle className="w-5 h-5 text-[#D8B45E] shrink-0" />
        
        <span className="font-semibold text-sm tracking-wide text-white">
          WhatsApp করুন
        </span>
      </a>
    </aside>
  );
};

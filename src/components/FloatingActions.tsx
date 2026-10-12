import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, ArrowUp, CalendarCheck } from 'lucide-react';

interface FloatingActionsProps {
  onOpenAdmission: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAdmission }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Vrinda International School Admissions Desk! I would like to inquire about admissions for session 2026-2027."
  );
  const whatsappUrl = `https://wa.me/919540032777?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900/90 text-white shadow-lg hover:bg-slate-950 transition-all border border-slate-700 hover:scale-105 cursor-pointer"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Dial */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 group cursor-pointer"
        title="Chat on WhatsApp with Admissions Desk"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs font-bold hidden sm:inline">
          WhatsApp Admission
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${SCHOOL_INFO.contact.phones[0].replace(/\s+/g, '')}`}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-blue-950 hover:bg-blue-900 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 group border border-blue-800 cursor-pointer"
        title="Call Admission Desk"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span className="text-xs font-bold hidden sm:inline">
          9540032777
        </span>
      </a>

      {/* Quick Apply Now Floating Pill */}
      <button
        onClick={onOpenAdmission}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer border border-amber-300 font-heading"
      >
        <CalendarCheck className="w-4 h-4 text-slate-950" />
        <span>Apply 2026-27</span>
      </button>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MapPin, Menu, X, ArrowRight, Download, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenAdmission: () => void;
  onOpenProspectus: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAdmission, 
  onOpenProspectus,
  activeSection 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined 6 clean items so navbar is spacious and elegant!
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Notice Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="font-semibold text-amber-400">
              CBSE Affiliation No. {SCHOOL_INFO.affiliation.affiliationNo}
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">
              Managed by {SCHOOL_INFO.management}
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a 
              href="#cbse-disclosures" 
              onClick={(e) => handleNavClick(e, '#cbse-disclosures')}
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <FileText className="w-3 h-3 text-amber-400" />
              <span>Mandatory Disclosure</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${SCHOOL_INFO.contact.phones[0].replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">{SCHOOL_INFO.contact.phones[0]}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href={SCHOOL_INFO.contact.googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Sector 48, Faridabad</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-md py-2.5 border-b border-slate-200/80' 
            : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-white rounded-xl p-1 border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
              <img 
                src="https://vrindainternational.in/img/logo.png" 
                alt="Vrinda International School Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                  VRINDA
                </span>
                <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-blue-950 text-amber-300 tracking-wider">
                  INTERNATIONAL
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-tight">
                Senior Secondary School • Sector 48, Faridabad
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links (Spacious & Clean) */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold transition-all relative py-1 ${
                    isActive 
                      ? 'text-blue-950 font-bold' 
                      : 'text-slate-600 hover:text-blue-950'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenProspectus}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-600" />
              <span>Prospectus</span>
            </button>

            <button
              onClick={onOpenAdmission}
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm hover:shadow transition-all cursor-pointer font-heading"
            >
              <span>Apply 2026-27</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAdmission}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950"
            >
              Apply
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-950 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cbse-disclosures"
                onClick={(e) => handleNavClick(e, '#cbse-disclosures')}
                className="block px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-950 hover:bg-slate-50 rounded-lg"
              >
                Mandatory Disclosure
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProspectus();
                }}
                className="w-full py-2.5 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Prospectus
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmission();
                }}
                className="w-full py-2.5 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 shadow-sm"
              >
                Apply Online
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

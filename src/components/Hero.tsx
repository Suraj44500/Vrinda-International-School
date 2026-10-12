import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, SCHOOL_INFO } from '../data/schoolData';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  GraduationCap, 
  Building2, 
  ShieldCheck,
  BookOpen,
  Compass
} from 'lucide-react';

interface HeroProps {
  onOpenAdmission: () => void;
  onOpenProspectus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmission, onOpenProspectus }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative pt-24 sm:pt-28 bg-slate-950 text-white overflow-hidden">
      {/* Slider Hero Frame */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center">
        {/* Slide Transitions */}
        {HERO_SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Affiliated to CBSE, New Delhi • Affiliation No. 531419</span>
            </div>

            {/* Slide Title */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight drop-shadow-md">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
              {slide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenAdmission}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer font-heading"
              >
                <span>{slide.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (slide.ctaSecondary.includes("Prospectus")) {
                    onOpenProspectus();
                  } else {
                    const target = slide.ctaSecondary.includes("Facilities") 
                      ? "#facilities" 
                      : slide.ctaSecondary.includes("Wings") 
                      ? "#academics" 
                      : "#gallery";
                    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-300" />
                <span>{slide.ctaSecondary}</span>
              </button>
            </div>

            {/* Accreditation Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] sm:text-xs text-slate-300">
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>CBSE Certified (531419)</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Pre-Nur to Class XII</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <Building2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Est. 1999 • Sector 48</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <BookOpen className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Sci / Comm / Arts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Prev/Next */}
        <div className="absolute right-6 bottom-8 z-20 hidden sm:flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
            className="p-2.5 rounded-full bg-slate-900/70 border border-white/20 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1.5 px-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentSlide ? 'w-7 bg-amber-400' : 'w-2 bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="p-2.5 rounded-full bg-slate-900/70 border border-white/20 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="bg-amber-500 text-slate-950 py-2.5 px-4 overflow-hidden border-y border-amber-600 font-bold text-xs sm:text-sm">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span>ADMISSIONS OPEN (2026-2027) FOR PRE-NURSERY, NURSERY, KG, CLASS I TO IX & XI (SCIENCE / COMMERCE / HUMANITIES)</span>
          <span>•</span>
          <span>CBSE AFFILIATION NO. 531419 • S.G.M. NAGAR, SECTOR 48, FARIDABAD</span>
          <span>•</span>
          <span>CALL ADMISSION DESK: +91 9540032777 / +91 9355746777</span>
          <span>•</span>
          <span>EXPERIENTIAL NEP 2020 LEARNING, ROBOTICS, SMART LABS & GPS TRANSPORT</span>
          <span>•</span>
          <span>100% BOARD PASS RESULT RECORD WITH TOP STATE PERCENTILES</span>
          <span>•</span>
          <span>ADMISSIONS OPEN (2026-2027) FOR PRE-NURSERY, NURSERY, KG, CLASS I TO IX & XI</span>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="bg-slate-900 border-b border-slate-800 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {SCHOOL_INFO.stats.map((stat, i) => (
              <div key={i} className="pt-3 sm:pt-0 sm:px-4 text-center first:pt-0">
                <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400 font-semibold mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

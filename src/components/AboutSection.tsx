import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Quote, Target, Award, CheckCircle2, Compass, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'director' | 'vision' | 'legacy'>('director');

  const corePillars = [
    {
      title: "Academic Excellence",
      desc: "CBSE aligned inquiry-driven pedagogy emphasizing conceptual clarity over rote memorization."
    },
    {
      title: "Character & Ethics",
      desc: "Inculcating timeless moral values, humility, respect for elders, and environmental consciousness."
    },
    {
      title: "Modern Technological Edge",
      desc: "Smart digital classrooms, interactive coding studios, and composite science experimentation."
    },
    {
      title: "Athletic & Creative Vigour",
      desc: "Comprehensive sports coaching, martial arts, classical music, drama, and public oratory."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            About Vrinda International School
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Nurturing Young Minds with Vision, Discipline & Care
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Established in 1999 under the aegis of the <strong className="text-slate-900 font-semibold">Shastri Educational and Welfare Trust</strong>, 
            Vrinda International School has stood as a premier temple of learning in Sector 48, Faridabad for over two and a half decades.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-200 mb-10 overflow-x-auto pb-1 gap-2">
          <button
            onClick={() => setActiveTab('director')}
            className={`px-5 py-3 text-sm font-bold tracking-tight rounded-t-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'director'
                ? 'bg-blue-950 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Quote className="w-4 h-4 text-amber-400" />
            <span>Managing Director's Message</span>
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            className={`px-5 py-3 text-sm font-bold tracking-tight rounded-t-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'vision'
                ? 'bg-blue-950 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Target className="w-4 h-4 text-amber-400" />
            <span>Vision & Mission</span>
          </button>

          <button
            onClick={() => setActiveTab('legacy')}
            className={`px-5 py-3 text-sm font-bold tracking-tight rounded-t-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'legacy'
                ? 'bg-blue-950 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Legacy & The Trust</span>
          </button>
        </div>

        {/* Tab 1: Managing Director */}
        {activeTab === 'director' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm animate-fadeIn">
            {/* Director's Photo */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-200 relative">
                  <img
                    src={SCHOOL_INFO.director.image}
                    alt={SCHOOL_INFO.director.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">Leadership</span>
                    <p className="font-heading text-lg font-bold leading-tight">{SCHOOL_INFO.director.name}</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-amber-500 text-slate-950 p-2.5 rounded-xl shadow-md">
                  <Quote className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-5">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  {SCHOOL_INFO.director.name}
                </h3>
                <p className="text-sm font-semibold text-blue-950">
                  {SCHOOL_INFO.director.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Shastri Educational and Welfare Trust
                </p>
              </div>
            </div>

            {/* Message Body */}
            <div className="lg:col-span-8 space-y-5 text-slate-700">
              <div className="p-4 bg-white rounded-xl border border-slate-200 italic text-base sm:text-lg font-medium text-slate-800 leading-relaxed shadow-xs">
                "{SCHOOL_INFO.director.message}"
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                At Vrinda International School, education extends far beyond textbooks and formal examinations. 
                Our endeavor is to identify the unique brilliance of each child, provide a fertile ground where their curiosity is celebrated, 
                and mentor them into confident individuals with high moral fortitude.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                With a state-of-the-art campus in Sector-48 Faridabad, dedicated faculty members, and constant parent-teacher synergy, 
                VIS continues to set benchmarks in academic rigor and holistic student well-being.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Student-Centric Value Pedagogy</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Individual Mentorship & Care</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Vision & Mission */}
        {activeTab === 'vision' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  Our Guiding Vision
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                  Illuminating Minds, Eradicating Darkness
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  To be an epitome of educational distinction where every child is empowered with intellectual acumen, 
                  ethical consciousness, and emotional resilience to excel in an evolving global society.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Developing critical thinking & scientific inquiry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Nurturing emotional intelligence & empathy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Fostering environmental and societal leadership
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-slate-800 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  Our Educational Mission
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                  Holistic Excellence with Lifelong Curiosity
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To create a safe, stimulating, and collaborative environment where students master the CBSE curriculum 
                  alongside creative arts, robotics, and sports, guided by experienced educators.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Experiential NEP 2020 pedagogical standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Zero compromise on child safety and mental well-being
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Strong parent-school collaboration for seamless guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Legacy & Trust */}
        {activeTab === 'legacy' && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 animate-fadeIn">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                Founded in 1999 • 26+ Years of Trust
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                The Shastri Educational and Welfare Trust
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The Shastri Educational and Welfare Trust was established with the noble intention of bringing high-standard, 
                comprehensive English-medium education to families across Faridabad and Delhi-NCR at an accessible fee structure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                  <p className="font-heading text-3xl font-extrabold text-blue-950">1999</p>
                  <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Establishment Year</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                  <p className="font-heading text-3xl font-extrabold text-amber-600">531419</p>
                  <p className="text-xs text-slate-500 font-semibold uppercase mt-1">CBSE Affiliation Code</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                  <p className="font-heading text-3xl font-extrabold text-emerald-600">3,500+</p>
                  <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Successful Alumni</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Four Principles Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Our Framework</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Four Pillars of Vrinda Education
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, i) => (
              <div 
                key={i} 
                className="p-6 bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200/80 hover:border-blue-950/20 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950 text-amber-400 flex items-center justify-center font-heading font-bold text-base mb-4 group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-950 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

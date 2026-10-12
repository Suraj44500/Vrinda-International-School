import React, { useState } from 'react';
import { ACADEMIC_WINGS } from '../data/schoolData';
import { BookOpen, Clock, CheckCircle2, Layers, ArrowRight, GraduationCap } from 'lucide-react';

interface AcademicsSectionProps {
  onOpenAdmission: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenAdmission }) => {
  const [selectedWingId, setSelectedWingId] = useState<string>(ACADEMIC_WINGS[0].id);

  const selectedWing = ACADEMIC_WINGS.find(w => w.id === selectedWingId) || ACADEMIC_WINGS[0];

  return (
    <section id="academics" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            Academic Pathways
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Curriculum Tailored for Every Stage of Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From playful sensory exploration in Pre-Nursery to disciplined CBSE Senior Secondary mastery in Class XII, 
            our academic roadmap inspires critical thinking, scientific curiosity, and moral integrity.
          </p>
        </div>

        {/* Wing Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {ACADEMIC_WINGS.map((wing) => {
            const isSelected = wing.id === selectedWingId;
            return (
              <button
                key={wing.id}
                onClick={() => setSelectedWingId(wing.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-blue-950 text-white border-blue-950 shadow-md transform -translate-y-0.5'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-950/40 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${
                    isSelected ? 'text-amber-300' : 'text-slate-500'
                  }`}>
                    {wing.grades.split(',')[0]}
                  </span>
                  <GraduationCap className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                </div>
                <p className={`font-bold text-sm sm:text-base leading-snug ${
                  isSelected ? 'text-white' : 'text-slate-900'
                }`}>
                  {wing.title.split('(')[0]}
                </p>
                <p className={`text-xs mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  Age: {wing.ageGroup}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Wing Details Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Wing Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Classes: {selectedWing.grades}</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                  {selectedWing.title}
                </h3>
                <p className="text-amber-700 font-semibold text-sm sm:text-base mt-1">
                  "{selectedWing.tagline}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedWing.description}
              </p>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  Key Pedagogical Highlights
                </h4>
                <div className="space-y-2.5">
                  {selectedWing.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenAdmission}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-950 text-white font-bold text-xs sm:text-sm hover:bg-blue-900 transition-colors cursor-pointer"
                >
                  <span>Apply for {selectedWing.title.split('(')[0]}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Right Subjects & Streams Panel */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                <BookOpen className="w-5 h-5 text-blue-950" />
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  Subjects & Learning Curriculum
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {selectedWing.subjects.map((sub, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-slate-200/80">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{sub}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-3 rounded-lg bg-blue-50 border border-blue-100 text-[11px] sm:text-xs text-blue-950">
                <p className="font-semibold mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-700" />
                  CBSE & NEP 2020 Aligned
                </p>
                <p className="text-slate-600">
                  Continuous and Comprehensive Evaluation (CCE) with periodic formative assessments and remedial support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

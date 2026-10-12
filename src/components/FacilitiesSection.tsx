import React, { useState } from 'react';
import { FACILITIES, Facility } from '../data/schoolData';
import { CheckCircle2, ShieldCheck, Eye, X, Maximize2, Award } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  return (
    <section id="facilities" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            Campus Infrastructure
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            World-Class Facilities for 360° Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our campus at S.G.M. Nagar, Sector 48 Faridabad is engineered to nurture curiosity, scientific thinking, 
            physical vitality, and creative expression within safe, CCTV-monitored environs.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-blue-950/90 text-amber-300 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wide">
                  {facility.category}
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => setSelectedFacility(facility)}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-white text-slate-900 shadow-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                  title="View full facility details"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {facility.description}
                  </p>
                </div>

                {/* Feature Bullet List */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {facility.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}

                  <button
                    onClick={() => setSelectedFacility(facility)}
                    className="mt-3 w-full text-center text-xs font-bold text-blue-950 hover:text-amber-600 flex items-center justify-center gap-1 cursor-pointer pt-2"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View All Features & Standards</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Protocol Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg">
                Strict Child Safety, Hygiene & Surveillance Protocols
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                100% CCTV coverage across campus • Fire Safety Certified • Purified RO Water • Medical First Aid Room
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-white/10 text-amber-300 border border-white/10">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Haryana PWD & Fire Approved</span>
          </div>
        </div>
      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative h-64 bg-slate-900">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {selectedFacility.category}
                </span>
                <h3 className="font-heading text-2xl font-bold mt-0.5">
                  {selectedFacility.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedFacility.description}
              </p>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                  Infrastructure & Equipment Standards
                </h4>
                <div className="space-y-2">
                  {selectedFacility.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 p-2.5 rounded-lg bg-slate-50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="px-5 py-2.5 rounded-lg bg-blue-950 text-white font-bold text-xs hover:bg-blue-900 transition-colors cursor-pointer"
                >
                  Close Facility View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

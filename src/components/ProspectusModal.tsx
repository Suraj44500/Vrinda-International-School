import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { X, Printer, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmission: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenAdmission 
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="bg-blue-950 p-6 text-white flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Academic Year 2026 – 2027</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Vrinda International School Prospectus
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Affiliated to CBSE, New Delhi • Affiliation No. 531419 • Faridabad
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              title="Print Prospectus"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Prospectus Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
          {/* Cover & Trust Info */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-4">
            <img 
              src="https://vrindainternational.in/img/logo.png" 
              alt="VIS Crest" 
              className="w-16 h-16 object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div>
              <h4 className="font-heading text-base font-bold text-slate-900">
                VRINDA INTERNATIONAL SCHOOL
              </h4>
              <p className="text-xs text-slate-500">
                Managed by Shastri Educational and Welfare Trust (Regd. 1999)
              </p>
              <p className="text-xs text-slate-600 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>S.G.M. Nagar, Sector-48, Faridabad - 121001 (Haryana)</span>
              </p>
            </div>
          </div>

          {/* Section: Academic Vision */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
              1. Institutional Philosophy & Vision
            </h4>
            <p className="leading-relaxed text-slate-600">
              Vrinda International School provides an intellectually stimulating environment designed to draw out 
              the best qualities in every child. We integrate CBSE academic rigor with experiential NEP 2020 frameworks, 
              fostering leadership, empathy, and technological capability.
            </p>
          </div>

          {/* Section: Academic Streams */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
              2. Academic Wings & Senior Secondary Streams
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-bold text-blue-950 text-xs">Pre-Primary to Middle Wing</p>
                <p className="text-[11px] text-slate-600 mt-1">Playgroup, Nursery, KG, Classes I through VIII with phonics, mental math, STEM labs, and robotics.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-bold text-blue-950 text-xs">Senior Secondary (XI - XII)</p>
                <p className="text-[11px] text-slate-600 mt-1">Medical (PCB), Non-Medical (PCM), Commerce (Accounts/BST/Eco), and Humanities with career counseling.</p>
              </div>
            </div>
          </div>

          {/* Section: Facilities & Security */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
              3. Campus Infrastructure Highlights
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Smart Multimedia Classes</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> High-Tech Computer Lab</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Physics, Chem & Bio Labs</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> 8,000+ Volume Library</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> GPS Tracked Bus Fleet</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> 100% CCTV Surveillance</div>
            </div>
          </div>

          {/* Section: Admission Guidelines */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
              4. Admission Procedure & Documents
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed mb-2">
              Registration forms are available online and at the school reception. Documents required: Municipal Birth Certificate, 4 passport photos, Aadhaar Card, and Previous School Transfer Certificate (TC).
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Admissions Hotline: <strong className="text-slate-800">{SCHOOL_INFO.contact.phones[0]}</strong>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs transition-colors cursor-pointer"
            >
              Print Summary
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAdmission();
              }}
              className="px-5 py-2 rounded-lg bg-blue-950 text-white font-bold text-xs hover:bg-blue-900 transition-colors cursor-pointer font-heading"
            >
              Apply Online Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

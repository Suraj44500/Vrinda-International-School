import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, ExternalLink, ChevronRight } from 'lucide-react';

interface FooterProps {
  onOpenAdmission: () => void;
  onOpenProspectus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmission, onOpenProspectus }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: School Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center">
                <img 
                  src="https://vrindainternational.in/img/logo.png" 
                  alt="VIS Emblem" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-white block">
                  VRINDA INTERNATIONAL SCHOOL
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  CBSE Affiliation No. {SCHOOL_INFO.affiliation.affiliationNo}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Established in 1999 under the Shastri Educational and Welfare Trust, VIS is a premier co-educational 
              English-medium institution committed to academic brilliance, moral fortitude, and all-round character building.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Pre-Nur to Class XII
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Science • Commerce • Humanities
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300">
                School Code: 41399
              </span>
            </div>
          </div>

          {/* Col 3: Academic Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Academic Wings
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#academics" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Early Years (Pre-Nur - KG)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Primary Wing (Classes I - V)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Middle Wing (Classes VI - VIII)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Senior Secondary (IX - XII)</span>
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Composite Science Labs</span>
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Sports & Athletic Field</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Admissions & Quick Access */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Admissions & Info
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={onOpenAdmission}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Online Admission Enquiry 2026-27</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenProspectus}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Download Digital Prospectus</span>
                </button>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Eligibility & Criteria Checker</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Photo & Event Archive</span>
                </a>
              </li>
              <li>
                <a href="#cbse-disclosures" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>CBSE Mandatory Disclosure</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.contact.address}</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.contact.phones[0]} / {SCHOOL_INFO.contact.phones[1]}</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="break-all">{SCHOOL_INFO.contact.email}</span>
              </p>
              <div className="pt-1">
                <a
                  href={SCHOOL_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  <span>Google Maps Navigation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Vrinda International School, Faridabad. Managed by Shastri Educational and Welfare Trust. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#cbse-disclosures" className="hover:text-slate-300 transition-colors">
              Mandatory Public Disclosure
            </a>
            <span>•</span>
            <a href={SCHOOL_INFO.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Sector 48 Campus
            </a>
            <span>•</span>
            <span className="text-slate-400">
              CBSE Affiliation #531419
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

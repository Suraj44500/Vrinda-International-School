import React from 'react';
import { CBSE_DISCLOSURES, SCHOOL_INFO } from '../data/schoolData';
import { ShieldCheck, FileCheck2, FileText, Download } from 'lucide-react';

interface MandatoryDisclosureProps {
  onOpenProspectus: () => void;
}

export const MandatoryDisclosureSection: React.FC<MandatoryDisclosureProps> = ({ onOpenProspectus }) => {
  return (
    <section id="cbse-disclosures" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            Regulatory Compliance
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            CBSE Mandatory Public Disclosure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In compliance with Central Board of Secondary Education (CBSE) circulars, 
            the following institutional particulars and statutory certifications are maintained transparently for parents and regulatory bodies.
          </p>
        </div>

        {/* Disclosure Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table of Details */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-4 sm:p-5 bg-blue-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-sm sm:text-base">
                  General Information & Approvals (Affiliation No. {SCHOOL_INFO.affiliation.affiliationNo})
                </h3>
              </div>
              <span className="text-[11px] font-mono bg-blue-900 text-amber-300 px-2.5 py-0.5 rounded">
                Verified
              </span>
            </div>

            <div className="divide-y divide-slate-200 text-xs sm:text-sm">
              {CBSE_DISCLOSURES.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:px-5 hover:bg-white transition-colors">
                  <div className="sm:col-span-5 font-semibold text-slate-700">
                    {item.item}
                  </div>
                  <div className="sm:col-span-7 font-medium text-slate-900 mt-1 sm:mt-0">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statutory Documents & Downloads Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-sm sm:text-base">
                <FileCheck2 className="w-5 h-5 text-amber-600" />
                <span>Statutory Certificates</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Copies of statutory approvals and certificates are verified annually and open for inspection during office hours.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  { name: "CBSE Affiliation Grant Letter", format: "Official" },
                  { name: "Trust Deed & Society Registration", format: "Shastri Trust" },
                  { name: "NOC Issued by State Govt. Haryana", format: "Directorate" },
                  { name: "Fire Safety Compliance Certificate", format: "Approved" },
                  { name: "Annual Academic Calendar 2026-27", format: "Curriculum" },
                  { name: "School Management Committee (SMC)", format: "Executive" },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 text-xs">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-950 flex-shrink-0" />
                      <span className="font-medium text-slate-800">{doc.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono bg-slate-100 px-1.5 py-0.5 rounded">
                      Available
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenProspectus}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-950 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download VIS Info Pack</span>
                </button>
              </div>
            </div>

            {/* TC Notice */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
              <p className="font-bold">Transfer Certificate (TC) Verification:</p>
              <p className="text-amber-800">
                To request or verify student Transfer Certificates, parents may submit a written application to the office desk or email <strong className="underline">{SCHOOL_INFO.contact.email}</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ADMISSION_STEPS, SCHOOL_INFO } from '../data/schoolData';
import { Calculator, CheckCircle, Send, HelpCircle, AlertCircle, Calendar } from 'lucide-react';

export const AdmissionsSection: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('Nursery');

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    targetClass: 'Nursery',
    stream: 'Science (Medical)',
    previousSchool: '',
    message: ''
  });

  const [submittedToken, setSubmittedToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const classEligibilityMap: Record<string, { minAge: string; documents: string[]; feeEstimate: string }> = {
    'Pre-Nursery': {
      minAge: '2.5 to 3 Years as of 31st March',
      documents: ['Municipal Birth Certificate', 'Child & Parents Passport Photos (4 each)', 'Aadhaar Card Copy', 'Immunization/Medical Record'],
      feeEstimate: 'Standard Early Years monthly structure (~Rs. 2,500 - Rs. 2,900/month)'
    },
    'Nursery': {
      minAge: '3+ to 4 Years as of 31st March',
      documents: ['Municipal Birth Certificate', 'Child & Parents Passport Photos', 'Aadhaar Card Copy', 'Address Proof'],
      feeEstimate: 'Affordable primary foundation structure with activity kit included'
    },
    'Kindergarten (KG)': {
      minAge: '4+ to 5 Years as of 31st March',
      documents: ['Birth Certificate', 'Previous Pre-School Progress Card (if attended)', 'Aadhaar Cards', 'Passport Photos'],
      feeEstimate: 'Quarterly academic tuition & developmental activity fee'
    },
    'Class I - V': {
      minAge: '5.5+ to 10 Years as of 31st March',
      documents: ['Previous School Report Card', 'Transfer Certificate (Countersigned if from other board/state)', 'Birth Certificate', 'Aadhaar Card'],
      feeEstimate: 'Standard primary slab including smart digital board access & sports'
    },
    'Class VI - VIII': {
      minAge: '11 to 13 Years as of 31st March',
      documents: ['Original Transfer Certificate (TC)', 'Class Marksheet / Report Card', 'Character Certificate', 'Aadhaar Card'],
      feeEstimate: 'Middle school composite science & computer lab fee slab'
    },
    'Class IX - X': {
      minAge: '14 to 15 Years as of 31st March',
      documents: ['Original Transfer Certificate (TC)', 'Class VIII / IX CBSE Registration details', 'Aadhaar Card', 'Passport Photos'],
      feeEstimate: 'CBSE Secondary board registration & laboratory fee slab'
    },
    'Class XI - XII': {
      minAge: '15+ Years (Passed Class X CBSE or equivalent)',
      documents: ['Class X Board Marksheet & Passing Certificate', 'Original Transfer Certificate & Migration Certificate', 'Aadhaar Card', 'Passport Photos'],
      feeEstimate: 'Senior secondary stream-specific lab & guidance fee (Science / Comm / Arts)'
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.parentName.trim() || !formData.studentName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in student name, parent name, and a valid phone number.');
      return;
    }

    if (formData.phone.trim().replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setSubmittedToken(`VIS-2026-${randomNum}`);
      setIsSubmitting(false);
    }, 600);
  };

  const resetForm = () => {
    setSubmittedToken(null);
    setFormData({
      parentName: '',
      studentName: '',
      phone: '',
      email: '',
      targetClass: 'Nursery',
      stream: 'Science (Medical)',
      previousSchool: '',
      message: ''
    });
  };

  const currentEligibility = classEligibilityMap[selectedClass] || classEligibilityMap['Nursery'];

  return (
    <section id="admissions" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            Admissions 2026 – 2027
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Begin Your Child's Journey with VIS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Admissions are underway for academic session 2026-2027 from Pre-Nursery to Class IX & XI. 
            We follow a warm, transparent, and merit-supportive admission process.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ADMISSION_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-heading font-black text-amber-500/30 group-hover:text-amber-500/60 transition-colors mb-3">
                {step.step}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* Interactive Eligibility & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Eligibility & Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-amber-600" />
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Admission Criteria & Age Checker
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                Select your child's target class to verify age eligibility and required admission documents.
              </p>

              {/* Class Dropdown */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Grade for 2026-27:
                </label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 cursor-pointer"
                >
                  <option value="Pre-Nursery">Pre-Nursery (Playgroup)</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Kindergarten (KG)">Kindergarten (LKG & UKG)</option>
                  <option value="Class I - V">Class I to Class V (Primary)</option>
                  <option value="Class VI - VIII">Class VI to Class VIII (Middle)</option>
                  <option value="Class IX - X">Class IX to Class X (Secondary)</option>
                  <option value="Class XI - XII">Class XI to Class XII (Senior Secondary)</option>
                </select>
              </div>

              {/* Computed Requirements Box */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Recommended Age Baseline
                  </span>
                  <p className="text-sm font-bold text-blue-950 mt-0.5">
                    {currentEligibility.minAge}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Fee Guidelines Overview
                  </span>
                  <p className="text-xs font-medium text-slate-700 mt-0.5">
                    {currentEligibility.feeEstimate}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Documents Needed for Verification
                  </span>
                  <ul className="space-y-1.5">
                    {currentEligibility.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Need Assistance Hotline */}
              <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Need help with eligibility?</p>
                  <p className="mt-0.5 text-amber-800">
                    Speak directly with VIS Admission Desk at <strong>{SCHOOL_INFO.contact.phones[0]}</strong> or visit between 8 AM – 3 PM.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Online Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              {submittedToken ? (
                /* Success Acknowledgment State */
                <div className="text-center py-10 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                      Inquiry Received Successfully
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      Welcome to Vrinda International School!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                      Thank you, <strong className="text-slate-800">{formData.parentName}</strong>. 
                      Your admission enquiry for <strong className="text-slate-800">{formData.studentName}</strong> (Class {formData.targetClass}) has been registered.
                    </p>
                  </div>

                  {/* Token Box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-center">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Reference Token ID
                    </p>
                    <p className="font-mono text-2xl font-black text-blue-950 mt-1">
                      {submittedToken}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Please note this token for campus visit & document verification.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl text-left max-w-md mx-auto text-xs text-blue-950 space-y-1.5">
                    <p className="font-bold flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-blue-700" />
                      Next Steps for Admission:
                    </p>
                    <p>1. Our admissions coordinator will call you at <strong>{formData.phone}</strong> within 24 working hours.</p>
                    <p>2. You may also walk in with your child for campus orientation at S.G.M. Nagar, Sector-48, Faridabad.</p>
                  </div>

                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-xl bg-blue-950 text-white font-bold text-xs hover:bg-blue-900 transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Registration Form */
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                        Online Admission Enquiry Form
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Academic Session 2026 – 2027 • Vrinda International School
                      </p>
                    </div>
                    <span className="hidden sm:inline text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                      Seats Open
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav Kumar"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Contact Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Admission Seeking For *
                      </label>
                      <select
                        value={formData.targetClass}
                        onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 bg-white cursor-pointer"
                      >
                        <option value="Pre-Nursery">Pre-Nursery</option>
                        <option value="Nursery">Nursery</option>
                        <option value="KG">Kindergarten (KG)</option>
                        <option value="Class I">Class I</option>
                        <option value="Class II">Class II</option>
                        <option value="Class III">Class III</option>
                        <option value="Class IV">Class IV</option>
                        <option value="Class V">Class V</option>
                        <option value="Class VI">Class VI</option>
                        <option value="Class VII">Class VII</option>
                        <option value="Class VIII">Class VIII</option>
                        <option value="Class IX">Class IX</option>
                        <option value="Class XI">Class XI (Senior Secondary)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Previous School (if any)
                      </label>
                      <input
                        type="text"
                        placeholder="Current or previous school name"
                        value={formData.previousSchool}
                        onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                      />
                    </div>
                  </div>

                  {formData.targetClass === 'Class XI' && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Class XI Stream Preference
                      </label>
                      <select
                        value={formData.stream}
                        onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 bg-white"
                      >
                        <option value="Science (Medical)">Science (Medical - Physics, Chemistry, Biology)</option>
                        <option value="Science (Non-Medical)">Science (Non-Medical - Physics, Chemistry, Maths)</option>
                        <option value="Commerce">Commerce (Accounts, BST, Economics, Maths/IP)</option>
                        <option value="Humanities">Humanities / Arts</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Any Questions / Special Queries
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Transport route in Sector 48, hostel, sports coaching..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-70 font-heading"
                    >
                      {isSubmitting ? (
                        <span>Submitting Your Application...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-400" />
                          <span>Submit Admission Enquiry (Session 2026-27)</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 Kept confidential by Shastri Educational and Welfare Trust.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Clock, ExternalLink, Calendar, CheckCircle, Navigation, UserCheck } from 'lucide-react';

export const LocationContactSection: React.FC = () => {
  const [tourDate, setTourDate] = useState('');
  const [tourTime, setTourTime] = useState('10:00 AM');
  const [tourParentName, setTourParentName] = useState('');
  const [tourPhone, setTourPhone] = useState('');
  const [tourConfirmed, setTourConfirmed] = useState(false);

  const handleTourSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourParentName || !tourPhone || !tourDate) return;
    setTourConfirmed(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            Reach Out & Visit Campus
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Connect with Vrinda International School
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conveniently situated in Sector-48, Faridabad. Visit us in person to experience 
            the vibrant campus culture, meet our academic directors, and review facilities.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Address */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                Campus Location
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {SCHOOL_INFO.contact.address}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Landmark: Near S.G.M. Nagar main market, Sector 48
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={SCHOOL_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-950 hover:text-amber-600 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-600" />
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3 ml-0.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Card 2: Contact Numbers */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                Admission & Office Dials
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {SCHOOL_INFO.contact.phones.map((phone, i) => (
                  <div key={i}>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="font-semibold hover:text-blue-900 hover:underline transition-colors block"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Email: <a href={`mailto:${SCHOOL_INFO.contact.email}`} className="text-blue-900 underline">{SCHOOL_INFO.contact.email}</a>
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Admissions Desk Open
              </span>
            </div>
          </div>

          {/* Card 3: School Hours */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                Operational Timings
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <div>
                  <span className="font-bold text-slate-900 block">Summer Student Hours:</span>
                  <span>{SCHOOL_INFO.contact.timings.summer}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Winter Student Hours:</span>
                  <span>{SCHOOL_INFO.contact.timings.winter}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Administrative Office:</span>
                  <span>{SCHOOL_INFO.contact.timings.office}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                Monday to Saturday
              </span>
            </div>
          </div>
        </div>

        {/* Map & Campus Visit Scheduler */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Real Google Maps Embed Container */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-bold">
                  Vrinda International School • S.G.M. Nagar, Sector-48, Faridabad
                </span>
              </div>
              <a
                href={SCHOOL_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-amber-300 hover:underline flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] bg-slate-100">
              <iframe
                title="Vrinda International School Faridabad Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.317957963456!2d77.28427311507743!3d28.401126582509176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdfccb71548ff%3A0xea47788105d89d34!2sVrinda%20International%20School!5e0!3m2!1sen!2sin!4v1697000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <span>Directions: Easily accessible via Badkhal Flyover & NH-19 bypass routes.</span>
              <a
                href={SCHOOL_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-blue-950 text-white font-bold hover:bg-blue-900 transition-colors whitespace-nowrap"
              >
                Get Live Directions
              </a>
            </div>
          </div>

          {/* Quick Schedule Campus Tour Desk */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-amber-700">
                <Calendar className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Plan Your Visit
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Schedule an In-Person Campus Walk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Meet our admissions counselors, view laboratories, classroom smartboards, and sports complex in action.
              </p>

              {tourConfirmed ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    Campus Visit Scheduled!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Thank you, <strong>{tourParentName}</strong>. We look forward to welcoming you on <strong>{tourDate}</strong> at <strong>{tourTime}</strong>.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    A confirmation SMS/call will be placed at {tourPhone}.
                  </p>
                  <button
                    onClick={() => setTourConfirmed(false)}
                    className="text-xs font-bold text-blue-950 underline pt-2 cursor-pointer"
                  >
                    Schedule Another Time
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTourSchedule} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={tourParentName}
                      onChange={(e) => setTourParentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={tourPhone}
                      onChange={(e) => setTourPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={tourDate}
                        onChange={(e) => setTourDate(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-950 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Time Slot
                      </label>
                      <select
                        value={tourTime}
                        onChange={(e) => setTourTime(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-950 bg-white"
                      >
                        <option value="09:00 AM">09:00 AM - 10:00 AM</option>
                        <option value="10:30 AM">10:30 AM - 11:30 AM</option>
                        <option value="12:00 PM">12:00 PM - 01:00 PM</option>
                        <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                  >
                    <UserCheck className="w-4 h-4 text-amber-400" />
                    <span>Confirm Campus Walk Appointment</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
              Visiting Desk is open Monday to Saturday, 8:00 AM to 3:00 PM. No prior appointments strictly necessary for walk-ins.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

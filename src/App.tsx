import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { GallerySection } from './components/GallerySection';
import { MandatoryDisclosureSection } from './components/MandatoryDisclosureSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { ProspectusModal } from './components/ProspectusModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academics', 'facilities', 'admissions', 'gallery', 'cbse-disclosures', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Sticky Header & Navbar */}
      <Navbar 
        onOpenAdmission={() => setIsAdmissionModalOpen(true)}
        onOpenProspectus={() => setIsProspectusModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenAdmission={() => setIsAdmissionModalOpen(true)}
          onOpenProspectus={() => setIsProspectusModalOpen(true)}
        />

        {/* About Section: History, MD Message, Vision & Mission */}
        <AboutSection />

        {/* Academics & Wings Section */}
        <AcademicsSection 
          onOpenAdmission={() => setIsAdmissionModalOpen(true)}
        />

        {/* Campus Facilities & Labs */}
        <FacilitiesSection />

        {/* Admissions 2026-27 Portal: Process, Eligibility Calculator & Enquiry Form */}
        <AdmissionsSection />

        {/* Campus Moments & Photo Gallery (Real VIS Photos & Lightbox) */}
        <GallerySection />

        {/* Testimonials & FAQ Section */}
        <TestimonialsSection />

        {/* Mandatory Public Disclosures (CBSE Affiliation 531419) */}
        <MandatoryDisclosureSection 
          onOpenProspectus={() => setIsProspectusModalOpen(true)}
        />

        {/* Location & Contact Section (Google Maps Embed & Directions) */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenAdmission={() => setIsAdmissionModalOpen(true)}
        onOpenProspectus={() => setIsProspectusModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <FloatingActions 
        onOpenAdmission={() => setIsAdmissionModalOpen(true)}
      />

      {/* Admission Enquiry Modal */}
      <AdmissionModal 
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      {/* Digital Prospectus Modal */}
      <ProspectusModal 
        isOpen={isProspectusModalOpen}
        onClose={() => setIsProspectusModalOpen(false)}
        onOpenAdmission={() => {
          setIsProspectusModalOpen(false);
          setIsAdmissionModalOpen(true);
        }}
      />
    </div>
  );
}

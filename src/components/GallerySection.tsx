import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/schoolData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filterOptions = [
    { label: 'All Photos', value: 'all' },
    { label: 'Events & Convocations', value: 'events' },
    { label: 'Cultural Celebrations', value: 'celebrations' },
    { label: 'Sports & Excursions', value: 'sports' },
    { label: 'Summer Camps', value: 'campus' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex(i => i.id === item.id);
    setSelectedPhotoIndex(idx !== -1 ? idx : 0);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_ITEMS.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex === 0 ? GALLERY_ITEMS.length - 1 : selectedPhotoIndex - 1));
  };

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            Campus Moments & Memories
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Life at Vrinda International School
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Glimpses into joyful learning, cultural celebrations, athletic conquests, 
            and memorable milestones from our authentic campus archives.
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-slate-100 rounded-xl w-fit">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeFilter === opt.value
                  ? 'bg-blue-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/80 text-amber-300 backdrop-blur-sm border border-white/10">
                    {item.date}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 text-slate-900 shadow opacity-0 group-hover:opacity-100 transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-12 text-white">
                  <h3 className="font-bold text-sm leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-3.5 bg-white text-xs text-slate-500 border-t border-slate-100 flex-1 flex items-center">
                <p className="line-clamp-2 italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:block cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:block cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[340px] sm:min-h-[460px]">
              <img
                src={GALLERY_ITEMS[selectedPhotoIndex].image}
                alt={GALLERY_ITEMS[selectedPhotoIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>

            <div className="p-4 sm:p-6 bg-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {GALLERY_ITEMS[selectedPhotoIndex].date}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold mt-0.5">
                  {GALLERY_ITEMS[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {GALLERY_ITEMS[selectedPhotoIndex].caption}
                </p>
              </div>

              <div className="text-xs text-slate-400 font-mono whitespace-nowrap">
                {selectedPhotoIndex + 1} of {GALLERY_ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

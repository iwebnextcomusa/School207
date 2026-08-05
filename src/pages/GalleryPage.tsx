import React, { useState } from 'react';
import { GALLERY_ITEMS, SCHOOL_INFO } from '../data/mockData';
import { GalleryItem } from '../types';
import { 
  Image as ImageIcon, 
  Video, 
  X, 
  Play, 
  Maximize2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const videos = [
    {
      id: "v1",
      title: "School207 Annual Sports Meet Highlights 2026",
      thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&q=80&w=600",
      duration: "04:15"
    },
    {
      id: "v2",
      title: "Robotics & Innovation Lab Showcase",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
      duration: "03:30"
    },
    {
      id: "v3",
      title: "Independence Day Cultural Performance",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600",
      duration: "05:50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
          Visual Tour • School207
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
          Campus Photo & Video Gallery
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore life inside School207: smart classrooms, science labs, annual sports tournaments, and student robotics projects.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'all', label: 'All Photos' },
          { id: 'campus', label: 'Campus & Classrooms' },
          { id: 'labs', label: 'Science & IT Labs' },
          { id: 'sports', label: 'Sports & Athletics' },
          { id: 'cultural', label: 'Cultural & Arts' }
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === cat.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 h-64 border border-slate-200 dark:border-slate-800 shadow-md cursor-pointer"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <span className="px-2 py-0.5 rounded bg-blue-600 text-[10px] font-bold uppercase tracking-wider inline-block">
                {item.category}
              </span>
              <h3 className="font-bold text-base font-heading">{item.title}</h3>
              <p className="text-xs text-slate-300 line-clamp-1">{item.caption}</p>
            </div>

            <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Video Section Placeholders */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading flex items-center gap-2">
              <Video className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              School207 Video Vault
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              High definition campus documentaries, sports coverage, and ceremony recordings.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid.title)}
              className="relative rounded-2xl overflow-hidden bg-slate-950 h-52 border border-slate-800 shadow-lg group cursor-pointer"
            >
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-bold text-sm line-clamp-1 font-heading">{vid.title}</h4>
                <span className="text-[10px] text-slate-300 font-mono">Duration: {vid.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Photo */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="p-6 space-y-1 bg-slate-900">
              <span className="px-2 py-0.5 rounded bg-blue-600 text-[10px] font-bold uppercase">
                {selectedImage.category}
              </span>
              <h3 className="font-bold text-xl font-heading">{selectedImage.title}</h3>
              <p className="text-sm text-slate-300">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Video */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="max-w-3xl w-full bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl text-white space-y-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-lg font-heading">{selectedVideo}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-800">
              <div className="text-center space-y-2 p-6">
                <Play className="w-12 h-12 mx-auto text-emerald-400 animate-pulse" />
                <p className="text-sm font-semibold">Playing Stream: {selectedVideo}</p>
                <p className="text-xs text-slate-400">School207 Official Video Stream</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

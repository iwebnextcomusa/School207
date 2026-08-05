import React, { useState, useRef } from 'react';
import { NavPage } from '../types';
import { SCHOOL_INFO, HIGHLIGHTS, TESTIMONIALS, NEWS_ITEMS } from '../data/mockData';
import { CampusCanvas3D } from '../components/3D/CampusCanvas3D';
import { 
  GraduationCap, 
  MonitorPlay, 
  Trophy, 
  Award, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Play, 
  Users, 
  BookOpen, 
  Sparkles,
  Phone,
  Mail,
  FileText,
  Volume2,
  VolumeX
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenAdmissionModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAdmissionModal }) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const highlightIcons: Record<string, React.ReactNode> = {
    teachers: <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
    classrooms: <MonitorPlay className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
    activities: <Trophy className="w-7 h-7 text-amber-500 dark:text-amber-400" />,
    excellence: <Award className="w-7 h-7 text-purple-600 dark:text-purple-400" />
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white pt-16 pb-24 border-b border-slate-800">
        {/* Hero Background Video & Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover opacity-35 pointer-events-none"
          >
            <source src="https://4ugxh6pswuv9wwm4.public.blob.vercel-storage.com/Create_video_for_School207_202608060031.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-slate-900/85 to-slate-950" />
        </div>

        {/* Audio Mute/Unmute Floating Controller Button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute background video" : "Mute background video"}
          className="absolute bottom-6 right-6 z-20 px-3.5 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl hover:scale-105 group text-xs font-semibold"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
              <span>Unmute Video</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-emerald-300">Sound Playing</span>
            </>
          )}
        </button>

        {/* Background Decorative Blur circles */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/15 rounded-full filter blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Govt Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-emerald-300 text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>State Recognized • Government School No: {SCHOOL_INFO.code}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.15]">
              Empowering Minds at{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-200">
                {SCHOOL_INFO.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Welcome to Government Secondary School No. 207. Delivering state-of-the-art education, modern computer labs, certified government faculty, and comprehensive student growth.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenAdmissionModal}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold text-base shadow-lg shadow-blue-500/25 transition-all hover:scale-105 flex items-center gap-2 group"
              >
                <FileText className="w-5 h-5" />
                <span>Admissions 2026</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition-all hover:scale-105 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Quick Contact & Accreditation pills */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free Primary & Subsidized Secondary</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>98.5% Board Examination Pass</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 HIGHLIGHT CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            Why Choose School207
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Pillars of Academic Distinction
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Dedicated to empowering every child with competitive skills, character integrity, and modern technological tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {highlightIcons[item.id]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>{item.stat}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THREE.JS 3D INTERACTIVE CANVAS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CampusCanvas3D />
      </section>

      {/* STATS COUNTER BANNER */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-900 text-white py-14 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-700/50">
            <div className="p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-emerald-300">
                98.5%
              </span>
              <span className="text-xs sm:text-sm text-slate-200 mt-1 block">Board Exam Pass Rate</span>
            </div>
            <div className="p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-blue-200">
                45+
              </span>
              <span className="text-xs sm:text-sm text-slate-200 mt-1 block">Certified Teachers</span>
            </div>
            <div className="p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-amber-300">
                1,200+
              </span>
              <span className="text-xs sm:text-sm text-slate-200 mt-1 block">Active Students</span>
            </div>
            <div className="p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-teal-200">
                25+
              </span>
              <span className="text-xs sm:text-sm text-slate-200 mt-1 block">State Trophies</span>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO INTEGRATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              Campus Tour Video
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
              Experience Daily Life at School207
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Watch our video documentary showcasing student robotics labs, smart classrooms, athletic meets, and science fairs.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>HD Smartboard Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Sports Complex</span>
              </div>
            </div>
          </div>

          {/* Embedded Video Placeholder */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-slate-950 aspect-video shadow-xl group border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
              alt="School207 Video Thumbnail"
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl cursor-pointer group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-slate-900/80 text-white text-xs font-mono">
              School207 Campus Documentary (02:45)
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS & ANNOUNCEMENT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
              Latest Notices & News
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Stay updated with official announcements from School207 desk.
            </p>
          </div>
          <button
            onClick={() => onNavigate('news')}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            View All News <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEWS_ITEMS.slice(0, 2).map((news) => (
            <div
              key={news.id}
              onClick={() => onNavigate('news')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col sm:flex-row gap-4"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full sm:w-36 h-28 rounded-xl object-cover shrink-0"
              />
              <div className="space-y-1.5 flex-1">
                <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px] font-bold uppercase">
                  {news.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {news.summary}
                </p>
                <span className="text-[11px] text-slate-400 block pt-1">{news.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
            Parent & Community Testimonials
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            What our community says about School207's educational standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4"
            >
              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { NEWS_ITEMS, UPCOMING_EVENTS, SCHOOL_INFO } from '../data/mockData';
import { NewsItem, SchoolEvent } from '../types';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  MapPin, 
  BellRing, 
  Search, 
  ArrowRight,
  ShieldCheck,
  Timer
} from 'lucide-react';

export const NewsEventsPage: React.FC = () => {
  const [newsFilter, setNewsFilter] = useState<string>('all');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Live Countdown Timer for Next Event
  const targetEvent = UPCOMING_EVENTS[0];
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(`${targetEvent.date}T10:00:00`).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetEvent]);

  const filteredNews = newsFilter === 'all'
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter(n => n.category.toLowerCase() === newsFilter.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
          Official Press & Announcements • Code: {SCHOOL_INFO.code}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
          News, Events & Official Notices
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Stay informed regarding official board schedules, school achievements, parent assemblies, and state competition results.
        </p>
      </div>

      {/* FEATURED UPCOMING EVENT COUNTDOWN TIMER BANNER */}
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 text-white shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Timer className="w-4 h-4 text-amber-400 animate-spin" />
            Next Major School Event Countdown
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            {targetEvent.title}
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            {targetEvent.description}
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-400" /> Date: {targetEvent.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" /> Time: {targetEvent.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" /> {targetEvent.location}
            </span>
          </div>
        </div>

        {/* Live Countdown Cards */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400">
                {timeLeft.days}
              </span>
              <span className="text-[10px] text-slate-400 uppercase font-bold">Days</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-blue-400">
                {timeLeft.hours}
              </span>
              <span className="text-[10px] text-slate-400 uppercase font-bold">Hours</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-amber-400">
                {timeLeft.minutes}
              </span>
              <span className="text-[10px] text-slate-400 uppercase font-bold">Mins</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-teal-300">
                {timeLeft.seconds}
              </span>
              <span className="text-[10px] text-slate-400 uppercase font-bold">Secs</span>
            </div>
          </div>
        </div>
      </div>

      {/* UPCOMING EVENTS LIST */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          Scheduled School Calendar Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px] font-bold uppercase">
                  {event.category}
                </span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-heading">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <p>📅 {event.date} • {event.time}</p>
                <p>📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LATEST ANNOUNCEMENTS & ARTICLES */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading flex items-center gap-2">
            <BellRing className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            Official Announcements & Notices
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            {['all', 'notice', 'achievement', 'academic', 'sports'].map((cat) => (
              <button
                key={cat}
                onClick={() => setNewsFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  newsFilter === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              onClick={() => setSelectedNews(news)}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all cursor-pointer space-y-4"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 rounded-2xl object-cover"
              />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase">
                    {news.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{news.date}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-heading">
                  {news.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {news.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { NavPage } from '../types';
import { TEACHERS, NEWS_ITEMS, UPCOMING_EVENTS, FAQS } from '../data/mockData';
import { Search, X, ArrowRight, BookOpen, Users, Newspaper, Calendar, HelpCircle } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: NavPage) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search Results
  const matchedTeachers = q ? TEACHERS.filter(t => t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q) || t.qualification.toLowerCase().includes(q)) : [];
  const matchedNews = q ? NEWS_ITEMS.filter(n => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q)) : [];
  const matchedEvents = q ? UPCOMING_EVENTS.filter(e => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)) : [];
  const matchedFaqs = q ? FAQS.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)) : [];

  const totalResults = matchedTeachers.length + matchedNews.length + matchedEvents.length + matchedFaqs.length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-start justify-center pt-16 px-4 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search School207 (e.g. Admissions, Physics, Dr. Karimov, Phone 4378816351)..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-base focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-semibold"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {!q && (
            <div className="text-center py-8 text-slate-400 space-y-3">
              <Search className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-700" />
              <p className="text-sm">Type to search across School207 faculty, news, events, and FAQs.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Admissions', 'Syllabus', 'Teachers', 'Code 4378816351', 'Gallery'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && totalResults === 0 && (
            <div className="text-center py-8 text-slate-400">
              <p className="text-sm font-medium">No results found for "{query}".</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for terms like "admissions", "teachers", or "events".</p>
            </div>
          )}

          {/* Teachers results */}
          {matchedTeachers.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4" /> Teachers & Staff ({matchedTeachers.length})
              </h5>
              <div className="space-y-1.5">
                {matchedTeachers.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => {
                      onNavigate('teachers');
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <h6 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h6>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{t.role} • {t.qualification}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News results */}
          {matchedNews.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                <Newspaper className="w-4 h-4" /> News & Announcements ({matchedNews.length})
              </h5>
              <div className="space-y-1.5">
                {matchedNews.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      onNavigate('news');
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h6 className="text-sm font-bold text-slate-900 dark:text-white">{n.title}</h6>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{n.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events results */}
          {matchedEvents.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> Upcoming Events ({matchedEvents.length})
              </h5>
              <div className="space-y-1.5">
                {matchedEvents.map((e) => (
                  <div
                    key={e.id}
                    onClick={() => {
                      onNavigate('news');
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h6 className="text-sm font-bold text-slate-900 dark:text-white">{e.title}</h6>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{e.date} • {e.location}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs results */}
          {matchedFaqs.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" /> FAQs ({matchedFaqs.length})
              </h5>
              <div className="space-y-1.5">
                {matchedFaqs.map((f) => (
                  <div
                    key={f.id}
                    onClick={() => {
                      onNavigate('about');
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                  >
                    <h6 className="text-sm font-bold text-slate-900 dark:text-white">{f.question}</h6>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 text-center text-xs text-slate-400 border-t border-slate-200 dark:border-slate-800">
          School207 Portal Search • Press ESC to close
        </div>
      </div>
    </div>
  );
};

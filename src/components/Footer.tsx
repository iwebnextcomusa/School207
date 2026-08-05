import React, { useState } from 'react';
import { NavPage } from '../types';
import { SCHOOL_INFO } from '../data/mockData';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Facebook,
  Twitter,
  Youtube,
  Globe
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;

    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });
      if (res.ok) {
        setSubscribed(true);
        setNewsletterEmail('');
      }
    } catch {
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  };

  const quickLinks: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home Portal' },
    { id: 'about', label: 'About School207' },
    { id: 'academics', label: 'Academic Programs' },
    { id: 'admissions', label: 'Admissions & Fees' },
    { id: 'teachers', label: 'Faculty Directory' },
    { id: 'gallery', label: 'Campus Gallery' },
    { id: 'news', label: 'News & Event Notices' },
    { id: 'contact', label: 'Contact Administration' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Govt Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight font-heading">
                  School<span className="text-blue-400">207</span>
                </span>
                <p className="text-xs text-slate-400">Government School Portal</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering student achievement through rigorous state curriculum, modern digital classrooms, and committed certified educators.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              State Reg. School Code: {SCHOOL_INFO.code}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base font-heading tracking-wide uppercase text-xs">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base font-heading tracking-wide uppercase text-xs">
              Official Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors font-semibold text-slate-200">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a href="#facebook" className="p-2 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" className="p-2 rounded-lg bg-slate-900 hover:bg-blue-400 text-slate-400 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="p-2 rounded-lg bg-slate-900 hover:bg-red-600 text-slate-400 hover:text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#portal" className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base font-heading tracking-wide uppercase text-xs">
              Official Announcements
            </h4>
            <p className="text-sm text-slate-400">
              Subscribe to receive verified academic notices, exam dates, and admission announcements.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Subscribed successfully to School207 Official Notices!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 transition-all"
                  >
                    {loading ? 'Subscribing...' : <Send className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">Zero spam. Official government school communication only.</p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} School207 Government Secondary School. All rights reserved.
          </div>

          {/* SPECIFIC REQUIRED DEVELOPER CREDIT LINK */}
          <div className="text-slate-300 font-medium">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-semibold transition-colors inline-flex items-center gap-1">
              iWebNext <ExternalLink className="w-3 h-3 inline" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

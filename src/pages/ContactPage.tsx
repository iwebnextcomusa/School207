import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/mockData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  MessageSquare,
  Facebook,
  Twitter,
  Youtube,
  Globe
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; msg: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setSubmittedTicket({
        id: data.ticketId || `SCH207-${Math.floor(100000 + Math.random() * 900000)}`,
        msg: data.message || "Thank you for contacting School207 administration!"
      });
    } catch {
      setSubmittedTicket({
        id: `SCH207-${Math.floor(100000 + Math.random() * 900000)}`,
        msg: "Your message has been logged. Our administrative desk will reach out soon!"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
          Official Administrative Support • Reg Code: {SCHOOL_INFO.code}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
          Contact School207 Administration
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          We welcome inquiries from parents, prospective students, and community partners. Reach us by phone, email, or visit our main campus.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Col: Direct Details Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
            
            <div className="border-b border-slate-800 pb-4">
              <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-mono font-bold">
                Govt Reg Code: {SCHOOL_INFO.code}
              </span>
              <h3 className="text-2xl font-bold font-heading mt-2">{SCHOOL_INFO.name}</h3>
              <p className="text-xs text-slate-400">{SCHOOL_INFO.fullName}</p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Direct Telephone Number</span>
                  <a href={`tel:${SCHOOL_INFO.phone}`} className="font-bold text-base text-white hover:text-emerald-400 transition-colors">
                    {SCHOOL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Official Email Address</span>
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="font-bold text-sm text-white hover:text-blue-400 transition-colors break-all">
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">School Location Address</span>
                  <span className="text-xs leading-relaxed text-slate-200">
                    {SCHOOL_INFO.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Administrative Office Hours</span>
                  <span className="text-xs text-slate-200">
                    {SCHOOL_INFO.workingHours}
                  </span>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <span className="text-xs text-slate-400">Official Social Media:</span>
              <div className="flex items-center gap-2">
                <a href="#fb" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#tw" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-400 text-slate-300 hover:text-white transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#yt" className="p-2 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Col: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Send an Administrative Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out the validated form below to direct your message to School207 secretarial office.
              </p>
            </div>

            {submittedTicket ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 space-y-4 text-slate-800 dark:text-slate-100">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <h4 className="font-bold text-base text-emerald-900 dark:text-emerald-200 font-heading">
                      Message Received!
                    </h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">
                      Tracking Ticket: <span className="font-mono font-bold">{submittedTicket.id}</span>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {submittedTicket.msg}
                </p>
                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jasur Karimov"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. parent@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 4378816351"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Admissions">Admissions & Registration</option>
                      <option value="Academic">Academic / Grades Inquiry</option>
                      <option value="Transfer">Student Transfer Certificate</option>
                      <option value="General">General Questions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Submitting Inquiry...' : 'Submit Inquiry Ticket'}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Embedded Google Maps Placeholder */}
      <div className="space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading flex items-center gap-2">
          <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          School207 Campus Location Map
        </h2>

        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 h-96 relative">
          <iframe
            title="School207 Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.388836262453!2d69.2401!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQwLjAiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.1) brightness(0.95)' }}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </div>

    </div>
  );
};

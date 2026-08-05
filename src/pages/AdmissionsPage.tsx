import React from 'react';
import { SCHOOL_INFO } from '../data/mockData';
import { 
  FileText, 
  CheckCircle2, 
  Download, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle,
  Clock,
  UserCheck
} from 'lucide-react';

interface AdmissionsPageProps {
  onOpenAdmissionModal: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onOpenAdmissionModal }) => {
  const steps = [
    { step: "01", title: "Registration & Application", desc: "Submit online registration form or pick up the printed form at School207 administrative office." },
    { step: "02", title: "Document Verification", desc: "Provide birth certificate, report cards, passport photos, and residence verification." },
    { step: "03", title: "Aptitude Assessment", desc: "Brief diagnostic evaluation in Mathematics and Primary Language for appropriate class placement." },
    { step: "04", title: "Official Enrollment", desc: "Receive official government student registration card and timetable allocation." }
  ];

  const requiredDocs = [
    "Original & Copy of Student's Birth Certificate",
    "Previous Academic Year Official Report Card & Transfer Certificate",
    "4 Passport-sized Recent Photos (White Background)",
    "Copy of Parent/Guardian State Identification Card",
    "Medical Fitness Certificate & Immunization Record"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Banner */}
      <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 text-white shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Admissions Open 2026-2027 • School No: {SCHOOL_INFO.code}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Join the School207 Student Body
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            State-subsidized high-quality education with equal opportunity. Start your application today online or visit our admissions desk.
          </p>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onOpenAdmissionModal}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold text-sm shadow-xl flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Apply Online Now
          </button>
        </div>
      </div>

      {/* Step-by-Step Admission Process */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
            4-Step Admission Process
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Simple, transparent enrollment procedure for all prospective families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3 relative"
            >
              <span className="text-3xl font-black text-blue-600/30 dark:text-blue-400/30 font-heading">
                {s.step}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                {s.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents & Eligibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Required Documents */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Required Application Documents
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Please bring original and copies of the following documents during physical verification:
          </p>
          <ul className="space-y-3 pt-2">
            {requiredDocs.map((doc, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Financial Assistance & Fees */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Tuition & State Subsidies
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            As a registered Government Institution (Code 4378816351), School207 adheres to public educational fee structures:
          </p>

          <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="font-bold block text-slate-900 dark:text-white">Primary & Middle School (Grades 1-8):</span>
              <span className="text-slate-500 dark:text-slate-400">100% Free tuition funded by State Ministry. Free textbooks provided.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="font-bold block text-slate-900 dark:text-white">High School & Senior Secondary (Grades 9-12):</span>
              <span className="text-slate-500 dark:text-slate-400">Nominal maintenance fee ($10/year). Scholarship available for top exam scorers.</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => alert("Downloading Blank Application Form PDF...")}
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700"
            >
              <Download className="w-4 h-4" /> Download Printable Form PDF
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

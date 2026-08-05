import React from 'react';
import { SCHOOL_INFO, TEACHERS } from '../data/mockData';
import { 
  Building2, 
  Target, 
  Eye, 
  History, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  GraduationCap,
  Calendar,
  Users
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const principal = TEACHERS[0]; // Dr. Alisher Karimov

  const timelineEvents = [
    { year: "1984", title: "School Foundation", desc: "Established by state charter as District Government School No. 207 with 6 basic classrooms." },
    { year: "1998", title: "Secondary Expansion", desc: "Upgraded to full High School status with dedicated chemistry and biology laboratories." },
    { year: "2012", title: "Digital Integration", desc: "Installed initial computer training lab and received State Model School status." },
    { year: "2023", title: "Smart Campus & Solar Energy", desc: "Launched solar smartboard classrooms, modern robotics club, and digital library." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-semibold">
          <Building2 className="w-3.5 h-3.5" />
          State Reg Code: {SCHOOL_INFO.code}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
          About {SCHOOL_INFO.fullName}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Dedicated to academic excellence, civic responsibility, scientific innovation, and equal educational access since {SCHOOL_INFO.established}.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Target className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
            Our Mission
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            To deliver accessible, high-quality, state-certified education that equips every student with critical thinking skills, scientific literacy, technological proficiency, and moral integrity to excel in global society.
          </p>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Free primary and subsidized secondary education schemes.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Inclusive learning environments for students of all backgrounds.</span>
            </li>
          </ul>
        </div>

        {/* Vision */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Eye className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
            Our Vision
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            To serve as a premier government educational institution recognized nationwide for outstanding board examination performance, STEM innovation, athletic leadership, and holistic youth empowerment.
          </p>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Integrating state-of-the-art AI, computer labs, and green energy.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Fostering national leaders and university merit scholars.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Principal's Message */}
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 text-white shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl w-64 h-80">
            <img
              src={principal.image}
              alt={principal.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 p-3 text-center backdrop-blur-sm">
              <h4 className="font-bold text-sm text-white">{principal.name}</h4>
              <p className="text-xs text-emerald-400">{principal.role}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
            Principal's Desk Message
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            "Education is the standard of national progress."
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed italic">
            "Dear Parents, Students, and Honored Visitors: Welcome to School207. As Headmaster, it is my privilege to lead a team of 45+ highly qualified government teachers. We believe every young student possesses unique potential. Through our rigorous academic syllabus, interactive science labs, and supportive environment, we ensure our graduates are prepared for state board exams and successful university careers."
          </p>
          <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
            <span>Official Email: {SCHOOL_INFO.email}</span>
            <span>Phone: {SCHOOL_INFO.phone}</span>
          </div>
        </div>
      </div>

      {/* School History Timeline */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
            Our Historical Journey
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Four decades of educational development and student achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {timelineEvents.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative"
            >
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400 font-heading block">
                {t.year}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mt-1">
                {t.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

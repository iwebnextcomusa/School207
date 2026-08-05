import React, { useState } from 'react';
import { TEACHERS, SCHOOL_INFO } from '../data/mockData';
import { Teacher } from '../types';
import { 
  Users, 
  Mail, 
  Award, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2,
  Filter
} from 'lucide-react';

export const TeachersPage: React.FC = () => {
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');

  const filteredTeachers = departmentFilter === 'all'
    ? TEACHERS
    : TEACHERS.filter(t => t.department === departmentFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
          Faculty Directory • School207
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
          Certified Government Educators
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Our team of 45+ government-certified teachers bring advanced degrees, state awards, and passion to every classroom.
        </p>
      </div>

      {/* Department Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'all', label: 'All Faculty' },
          { id: 'science', label: 'Science & IT' },
          { id: 'mathematics', label: 'Mathematics' },
          { id: 'languages', label: 'Languages' },
          { id: 'social_studies', label: 'Social Studies' },
          { id: 'sports', label: 'Sports & Arts' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setDepartmentFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              departmentFilter === tab.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Teacher Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Photo & Badge */}
              <div className="relative rounded-2xl overflow-hidden h-60 bg-slate-100 dark:bg-slate-800">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] font-mono font-bold border border-slate-700">
                  {teacher.experience} Experience
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  {teacher.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {teacher.role}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {teacher.qualification}
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{teacher.bio}"
              </p>

              {teacher.awards && teacher.awards.length > 0 && (
                <div className="space-y-1">
                  {teacher.awards.map((award, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-[10px] font-bold border border-amber-200 dark:border-amber-800">
                      <Award className="w-3 h-3 text-amber-500" /> {award}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Email Contact */}
            <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800">
              <a
                href={`mailto:${teacher.email}`}
                className="w-full py-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <Mail className="w-3.5 h-3.5" /> Contact Educator
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

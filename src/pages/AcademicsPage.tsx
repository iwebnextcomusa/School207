import React, { useState } from 'react';
import { ACADEMIC_PROGRAMS, SCHOOL_INFO } from '../data/mockData';
import { 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  Award, 
  Clock, 
  FileCheck, 
  Download,
  GraduationCap
} from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  const [selectedProg, setSelectedProg] = useState(ACADEMIC_PROGRAMS[2]); // High school default

  const examSchedules = [
    { term: "First Quarter Evaluation", dates: "October 10 - October 18, 2026", type: "Internal Written & Practical Tests" },
    { term: "Mid-Term Board Mock Exam", dates: "December 05 - December 20, 2026", type: "Comprehensive Assessment" },
    { term: "Final State Board Examinations", dates: "March 01 - March 25, 2027", type: "State Ministry Standardized Exams" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
          Academic Excellence • Govt Code: {SCHOOL_INFO.code}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
          Curriculum & Academic Programs
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Structured educational pathways compliant with the National Ministry of Education standards, combining scientific inquiry, digital literacy, and humanities.
        </p>
      </div>

      {/* Programs Offered Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACADEMIC_PROGRAMS.map((prog) => {
          const isSelected = selectedProg.id === prog.id;
          return (
            <div
              key={prog.id}
              onClick={() => setSelectedProg(prog)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-500 shadow-xl scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-blue-300 shadow-md'
              }`}
            >
              <div className="space-y-3">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase inline-block ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                }`}>
                  {prog.grades}
                </span>
                <h3 className="text-xl font-bold font-heading">{prog.level}</h3>
                <p className={`text-xs leading-relaxed ${isSelected ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                  {prog.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-bold flex items-center justify-between">
                <span>View Details</span>
                <span>→</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Program Detailed Breakdown */}
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
              {selectedProg.level} Detailed Syllabus
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">{selectedProg.grades}</p>
          </div>
          <button 
            onClick={() => alert(`Downloading official syllabus PDF for ${selectedProg.level}...`)}
            className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-xs font-bold flex items-center gap-2 hover:bg-blue-100 transition-colors"
          >
            <Download className="w-4 h-4" /> Download Syllabus PDF
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 font-heading">
              Core Subjects Taught
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {selectedProg.subjects.map((sub, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 font-heading">
              Program Highlights
            </h4>
            <div className="space-y-2">
              {selectedProg.features.map((feat, i) => (
                <div key={i} className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Examination & Assessment Schedule */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
              Examinations & Evaluation Calendar 2026-2027
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              State standardized testing schedule for School207.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examSchedules.map((exam, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <span className="px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-bold uppercase">
                {exam.type}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white font-heading">{exam.term}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                <Calendar className="w-4 h-4 text-blue-500" /> {exam.dates}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

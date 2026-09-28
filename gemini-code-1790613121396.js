import React from 'react';
import { PenTool, Target, BarChart3, ArrowRight } from 'lucide-react';

export default function Home({ onStart }) {
  return (
    <div className="w-full max-w-3xl py-12 text-center space-y-12">
      <div className="space-y-4">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 rounded-full">
          Student Practice Portal
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Turn any topic into a quiz.
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          Create quick practice quizzes, test your knowledge, and learn from your mistakes.
        </p>
      </div>

      <div>
        <button
          onClick={onStart}
          className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg rounded-2xl shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all"
        >
          Create Quiz <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-left pt-6">
        <div className="p-6 bg-slate-800/40 border border-slate-800 rounded-2xl backdrop-blur">
          <div className="w-12 h-12 bg-indigo-950/80 border border-indigo-800/50 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
            <PenTool className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">1. Create a Quiz</h3>
          <p className="text-slate-400 text-sm">Specify any subject, custom topic, difficulty level, and question length.</p>
        </div>

        <div className="p-6 bg-slate-800/40 border border-slate-800 rounded-2xl backdrop-blur">
          <div className="w-12 h-12 bg-indigo-950/80 border border-indigo-800/50 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">2. Test Knowledge</h3>
          <p className="text-slate-400 text-sm">Focus on one targeted question at a time with clear distraction-free UI.</p>
        </div>

        <div className="p-6 bg-slate-800/40 border border-slate-800 rounded-2xl backdrop-blur">
          <div className="w-12 h-12 bg-indigo-950/80 border border-indigo-800/50 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">3. Review Results</h3>
          <p className="text-slate-400 text-sm">Get immediate explanations for every correct and incorrect selection.</p>
        </div>
      </div>
    </div>
  );
}
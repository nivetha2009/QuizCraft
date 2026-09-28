import React from 'react';
import { RotateCcw, PlusCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function QuizResults({ config, questions, userAnswers, onRetake, onNewQuiz }) {
  let score = 0;
  userAnswers.forEach((ans, idx) => {
    if (ans === questions[idx].answer) {
      score += 1;
    }
  });

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="w-full max-w-3xl bg-slate-800/60 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur space-y-8">
      {/* Overview Banner */}
      <div className="text-center space-y-4 pb-6 border-b border-slate-700/60">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 rounded-full">
          Quiz Complete!
        </span>
        <h2 className="text-3xl font-extrabold text-white">Results Overview</h2>

        <div className="flex justify-center items-center gap-8 pt-2">
          <div className="bg-slate-900/80 border border-slate-700/60 px-6 py-4 rounded-2xl">
            <span className="block text-xs font-medium text-slate-400 uppercase">Score</span>
            <span className="text-3xl font-bold text-white">
              {score} <span className="text-lg text-slate-500">/ {questions.length}</span>
            </span>
          </div>

          <div className="bg-slate-900/80 border border-slate-700/60 px-6 py-4 rounded-2xl">
            <span className="block text-xs font-medium text-slate-400 uppercase">Percentage</span>
            <span className="text-3xl font-bold text-indigo-400">{percentage}%</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={onRetake}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-xl transition"
          >
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
          <button
            onClick={onNewQuiz}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition"
          >
            <PlusCircle className="w-4 h-4" /> Create New Quiz
          </button>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Question Breakdown</h3>

        {questions.map((q, idx) => {
          const userAns = userAnswers[idx];
          const isCorrect = userAns === q.answer;

          return (
            <div
              key={idx}
              className={`p-6 rounded-2xl border ${
                isCorrect
                  ? 'bg-emerald-950/20 border-emerald-800/40'
                  : 'bg-rose-950/20 border-rose-800/40'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h4 className="font-semibold text-slate-100 text-base">
                  {idx + 1}. {q.question}
                </h4>
                {isCorrect ? (
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-md shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-950/80 border border-rose-800 px-2.5 py-1 rounded-md shrink-0">
                    <XCircle className="w-3.5 h-3.5" /> Incorrect
                  </span>
                )}
              </div>

              <div className="space-y-1 text-sm mb-3">
                <p className="text-slate-300">
                  <span className="text-slate-400 font-medium">Your Answer:</span>{' '}
                  <span className={isCorrect ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                    {userAns !== null ? q.options[userAns] : 'Not answered'}
                  </span>
                </p>
                {!isCorrect && (
                  <p className="text-slate-300">
                    <span className="text-slate-400 font-medium">Correct Answer:</span>{' '}
                    <span className="text-emerald-400 font-semibold">{q.options[q.answer]}</span>
                  </p>
                )}
              </div>

              {q.explanation && (
                <div className="text-xs bg-slate-900/60 border border-slate-800 p-3 rounded-xl text-slate-400">
                  <span className="font-semibold text-slate-300">Explanation:</span> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
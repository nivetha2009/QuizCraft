import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function QuizSetup({ onGenerate, initialConfig }) {
  const [subject, setSubject] = useState(initialConfig.subject || 'Economics');
  const [topic, setTopic] = useState(initialConfig.topic || 'Elasticity of Demand');
  const [difficulty, setDifficulty] = useState(initialConfig.difficulty || 'Medium');
  const [questionCount, setQuestionCount] = useState(initialConfig.questionCount || 5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({
      subject,
      topic,
      difficulty,
      questionCount: parseInt(questionCount, 10)
    });
  };

  return (
    <div className="w-full max-w-xl bg-slate-800/60 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur">
      <h2 className="text-2xl font-bold text-white mb-6">Quiz Setup</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Subject</label>
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. Financial Accounting, Computer Science"
            className="w-full bg-slate-900/80 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Topic</label>
          <input
            type="text"
            required
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Elasticity of Demand, Data Structures"
            className="w-full bg-slate-900/80 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Difficulty</label>
          <div className="grid grid-cols-3 gap-3">
            {['Easy', 'Medium', 'Hard'].map((lvl) => (
              <button
                type="button"
                key={lvl}
                onClick={() => setDifficulty(lvl)}
                className={`py-2.5 rounded-xl text-sm font-semibold border transition ${
                  difficulty === lvl
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Number of Questions</label>
          <div className="grid grid-cols-4 gap-3">
            {[5, 10, 15, 20].map((num) => (
              <button
                type="button"
                key={num}
                onClick={() => setQuestionCount(num)}
                className={`py-2.5 rounded-xl text-sm font-semibold border transition ${
                  questionCount === num
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base rounded-xl shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" /> Generate Quiz
        </button>
      </form>
    </div>
  );
}
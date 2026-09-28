import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function QuizRunner({ config, questions, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null)
  );

  const currentQuestion = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  const handleSelectOption = (optionIndex) => {
    const updated = [...selectedAnswers];
    updated[currentIndex] = optionIndex;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(selectedAnswers);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-slate-800/60 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            {config.subject} • {config.topic}
          </span>
          <h2 className="text-lg font-bold text-white">
            Question {currentIndex + 1} of {questions.length}
          </h2>
        </div>
        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 border border-slate-600 text-xs rounded-full font-medium">
          {config.difficulty}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-900 rounded-full h-2 mb-8 overflow-hidden border border-slate-700/50">
        <div
          className="bg-indigo-500 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Text */}
      <div className="mb-8">
        <h3 className="text-xl font-medium text-slate-100 leading-relaxed">
          {currentQuestion.question}
        </h3>
      </div>

      {/* Options List */}
      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = selectedAnswers[currentIndex] === idx;
          const letter = String.fromCharCode(65 + idx);

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition ${
                isSelected
                  ? 'bg-indigo-600/20 border-indigo-500 text-white'
                  : 'bg-slate-900/50 border-slate-700/60 text-slate-300 hover:border-slate-600 hover:bg-slate-900/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {letter}
                </span>
                <span className="text-sm font-medium">{option}</span>
              </div>
              {isSelected && <Check className="w-5 h-5 text-indigo-400" />}
            </button>
          );
        })}
      </div>

      {/* Action Button */}
      <button
        disabled={selectedAnswers[currentIndex] === null}
        onClick={handleNext}
        className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 text-white font-semibold text-base rounded-xl shadow-lg shadow-indigo-600/20 transition flex items-center justify-center gap-2"
      >
        {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}{' '}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
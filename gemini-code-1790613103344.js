import React, { useState } from 'react';
import Home from './components/Home';
import QuizSetup from './components/QuizSetup';
import QuizRunner from './components/QuizRunner';
import QuizResults from './components/QuizResults';
import { QUESTION_BANK, generateDynamicQuestions } from './data/quizData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home | setup | quiz | results
  const [quizConfig, setQuizConfig] = useState({
    subject: 'Economics',
    topic: 'Elasticity of Demand',
    difficulty: 'Medium',
    questionCount: 5
  });
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleStartSetup = () => {
    setCurrentPage('setup');
  };

  const handleGenerateQuiz = (config) => {
    setQuizConfig(config);
    const { subject, topic, difficulty, questionCount } = config;

    let selectedQuestions = [];
    if (QUESTION_BANK[subject] && QUESTION_BANK[subject][topic]) {
      selectedQuestions = QUESTION_BANK[subject][topic].slice(0, questionCount);
    }

    if (selectedQuestions.length === 0) {
      selectedQuestions = generateDynamicQuestions(subject, topic, questionCount, difficulty);
    }

    setActiveQuestions(selectedQuestions);
    setUserAnswers(new Array(selectedQuestions.length).fill(null));
    setCurrentPage('quiz');
  };

  const handleFinishQuiz = (finalAnswers) => {
    setUserAnswers(finalAnswers);
    setCurrentPage('results');
  };

  const handleRetakeQuiz = () => {
    setUserAnswers(new Array(activeQuestions.length).fill(null));
    setCurrentPage('quiz');
  };

  const handleNewQuiz = () => {
    setCurrentPage('setup');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      {/* Global Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition">
              QC
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition">
              QuizCraft
            </span>
          </div>
          {currentPage !== 'home' && (
            <button
              onClick={() => setCurrentPage('home')}
              className="text-sm font-medium text-slate-400 hover:text-slate-200 transition"
            >
              Exit to Home
            </button>
          )}
        </div>
      </header>

      {/* Main Screen Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 flex items-center justify-center">
        {currentPage === 'home' && <Home onStart={handleStartSetup} />}
        {currentPage === 'setup' && <QuizSetup onGenerate={handleGenerateQuiz} initialConfig={quizConfig} />}
        {currentPage === 'quiz' && (
          <QuizRunner
            config={quizConfig}
            questions={activeQuestions}
            onFinish={handleFinishQuiz}
          />
        )}
        {currentPage === 'results' && (
          <QuizResults
            config={quizConfig}
            questions={activeQuestions}
            userAnswers={userAnswers}
            onRetake={handleRetakeQuiz}
            onNewQuiz={handleNewQuiz}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        QuizCraft — Turn any topic into practice quizzes.
      </footer>
    </div>
  );
}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, RotateCcw, ArrowRight, CheckCircle2, XCircle, BrainCircuit } from 'lucide-react';
import { questions } from './data';
import { QuizState } from './types';

export default function App() {
  const [gameState, setGameState] = useState<QuizState>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleStart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameState('QUIZ');
    setIsAnswered(false);
    setSelectedOption(null);
  };

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setGameState('RESULT');
    }
  }, [currentQuestionIndex]);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }

    // Auto-advance after 2 seconds
    const timeout = setTimeout(() => {
      handleNext();
    }, 2000);
    setTimer(timeout);
  };

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const getResultFeedback = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { message: "عبقري! أداء استثنائي", color: "text-emerald-600", bg: "bg-emerald-50" };
    if (percentage >= 75) return { message: "ممتاز! أداء رائع جداً", color: "text-indigo-600", bg: "bg-indigo-50" };
    if (percentage >= 50) return { message: "جيد جداً! واصل التقدم", color: "text-blue-600", bg: "bg-blue-50" };
    if (percentage >= 35) return { message: "محاولة جيدة! استمر في المحاولة", color: "text-amber-600", bg: "bg-amber-50" };
    return { message: "لا تيأس! المراجعة هي مفتاح النجاح", color: "text-rose-600", bg: "bg-rose-50" };
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center font-sans select-none overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50 z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-200 rounded-full blur-3xl opacity-50 z-0" />
      
      <div className="w-full max-w-md bg-white sm:rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden h-full sm:h-auto sm:min-h-[750px] flex flex-col relative z-10 border border-white/50 backdrop-blur-sm">
        
        <AnimatePresence mode="wait">
          {gameState === 'START' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col p-8 sm:p-10"
            >
              <div className="flex-1 flex flex-col items-center justify-center space-y-10">
                <motion.div 
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 10 }}
                  transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse', ease: 'easeInOut' }}
                  className="w-32 h-32 bg-indigo-600 rounded-[40px] flex items-center justify-center shadow-2xl shadow-indigo-200"
                >
                  <BrainCircuit className="w-16 h-16 text-white" />
                </motion.div>
                
                <div className="space-y-4 text-center">
                  <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">خبير الخوارزميات</h1>
                  <p className="text-slate-500 text-lg leading-relaxed px-4">
                    طوّر مهاراتك البرمجية من خلال <span className="font-bold text-indigo-600">{questions.length}</span> سؤال احترافي بأسلوب ممتع وسهل.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center gap-1">
                    <span className="text-2xl font-bold text-slate-800 tracking-tighter">{questions.length}</span>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">سؤال</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center gap-1">
                    <span className="text-2xl font-bold text-slate-800 tracking-tighter">10</span>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">دقائق</span>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <button
                  id="start-btn"
                  onClick={handleStart}
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-3xl font-black text-xl shadow-2xl shadow-indigo-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 group"
                >
                  ابدأ التعلم الآن
                  <ArrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

          {gameState === 'QUIZ' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col h-full"
            >
              {/* Top Navigation Bar */}
              <div className="p-6 pb-2 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">التقدم الحالي</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-slate-900">{currentQuestionIndex + 1}</span>
                    <span className="text-slate-300 font-medium">/</span>
                    <span className="text-slate-400 font-bold">{questions.length}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-2xl border border-amber-100">
                    <Trophy className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-black text-amber-700 text-sm">{score}</span>
                  </div>
                </div>
              </div>

              {/* Progress Line */}
              <div className="px-6 relative h-1.5 w-full bg-slate-100 mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  className="absolute top-0 right-0 h-full bg-indigo-500 rounded-l-full"
                  transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                />
              </div>

              <div className="p-6 space-y-8 flex-1 flex flex-col">
                {/* Question Area */}
                <div className="pt-4 min-h-[140px] flex flex-col justify-center">
                  <motion.h2 
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-extrabold text-slate-800 leading-[1.4] text-right" 
                    dir="auto"
                  >
                    {currentQuestion.text}
                  </motion.h2>
                </div>

                {/* Options List */}
                <div className="space-y-3.5 flex-1 custom-scrollbar overflow-y-auto max-h-[400px]">
                  {currentQuestion.options.map((option, index) => {
                    const isCorrect = index === currentQuestion.correctAnswer;
                    const isSelected = selectedOption === index;
                    
                    let bgClass = "bg-slate-50 border-transparent hover:bg-slate-100 active:bg-slate-200";
                    let textClass = "text-slate-700 font-bold";
                    let iconBg = "bg-white text-slate-400";
                    let checkMark = null;

                    if (isAnswered) {
                      if (isCorrect) {
                        bgClass = "bg-emerald-50 border-emerald-500";
                        textClass = "text-emerald-900 font-black";
                        iconBg = "bg-emerald-500 text-white";
                        checkMark = <CheckCircle2 className="w-6 h-6 text-emerald-500" />;
                      } else if (isSelected) {
                        bgClass = "bg-rose-50 border-rose-500";
                        textClass = "text-rose-900 font-black";
                        iconBg = "bg-rose-500 text-white";
                        checkMark = <XCircle className="w-6 h-6 text-rose-500" />;
                      } else {
                        bgClass = "bg-white border-transparent opacity-40 grayscale-[0.5]";
                        iconBg = "bg-slate-100 text-slate-300";
                      }
                    }

                    return (
                      <motion.button
                        key={index}
                        whileTap={!isAnswered ? { scale: 0.98 } : {}}
                        disabled={isAnswered}
                        onClick={() => handleOptionSelect(index)}
                        className={`w-full p-5 rounded-[24px] border-2 flex items-center justify-between gap-4 text-right transition-all duration-300 group ${bgClass} ${textClass}`}
                      >
                        <div className="flex items-center gap-3">
                          {checkMark}
                          <span className="flex-1 text-lg leading-snug" dir="auto">
                            {option}
                          </span>
                        </div>
                        <span className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm transition-colors shrink-0 ${iconBg} shadow-sm`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Question Info / Feedback */}
                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-center"
                    >
                      <div className={`px-5 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2 ${
                        selectedOption === currentQuestion.correctAnswer ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'
                      }`}>
                        {selectedOption === currentQuestion.correctAnswer ? 'إجابة صحيحة! أحسنت' : 'إجابة خاطئة، حاول في المرة القادمة'}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sticky Footer Next Button */}
              <div className="p-6 border-t border-slate-50 bg-white/80 backdrop-blur-md">
                 <button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className={`w-full py-5 flex items-center justify-center gap-3 rounded-3xl font-black text-xl transition-all ${
                    isAnswered 
                      ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-100 hover:bg-slate-900 active:scale-[0.98]' 
                      : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                  }`}
                >
                  {currentQuestionIndex === questions.length - 1 ? 'إنهاء الاختبار' : 'السؤال التالي'}
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}

          {gameState === 'RESULT' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col p-8 sm:p-10"
            >
              <div className="flex-1 flex flex-col items-center justify-center space-y-12">
                <div className="relative">
                  <motion.div 
                    initial={{ rotate: -20, scale: 0.5 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-56 h-56 bg-slate-50 rounded-[60px] flex items-center justify-center border-4 border-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]"
                  >
                    <div className="text-center flex flex-col items-center">
                      <span className="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase mb-2">النتيجة النهائية</span>
                      <span className="text-8xl font-black text-slate-900 leading-none">{score}</span>
                      <div className="h-1 w-12 bg-indigo-100 rounded-full my-4" />
                      <span className="text-2xl text-slate-400 block font-bold leading-none">من {questions.length}</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    className="absolute -top-6 -right-6 bg-amber-400 text-white p-5 rounded-[28px] shadow-2xl border-6 border-white"
                  >
                    <Trophy className="w-10 h-10 fill-white" />
                  </motion.div>
                </div>

                <div className="space-y-4 text-center">
                  <div className={`inline-block px-5 py-2 rounded-2xl text-base font-black ${getResultFeedback().bg} ${getResultFeedback().color}`}>
                    {getResultFeedback().message}
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                    أحسنت صنعاً!
                  </h2>
                  <p className="text-slate-500 text-lg px-6">
                    لقد أنجزت رحلة تحدي مهاراتك في هياكل البيانات والخوارزميات بنجاح.
                  </p>
                </div>
              </div>

              <div className="pt-10">
                <button
                  id="restart-btn"
                  onClick={handleStart}
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-3xl font-black text-xl shadow-2xl shadow-indigo-100 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                >
                  <RotateCcw className="w-6 h-6" />
                  حاول مرة أخرى
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Footer Branding */}
      <div className="p-6 text-center">
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">DSA Mastery Pro 2.0</p>
      </div>
    </div>
  );
}

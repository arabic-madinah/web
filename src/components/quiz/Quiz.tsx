// components/Quiz.tsx
import { useState } from "react";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number; // index of correct answer
}

export interface QuizProps {
  questions: QuizQuestion[];
}

export const Quiz = ({ questions }: QuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [showResults, setShowResults] = useState(false);
  const [current, setCurrent] = useState(0);

  const correctCount = selectedAnswers.filter(
    (ans, idx) => ans === questions[idx].answer,
  ).length;

  const handleSelect = (optIdx: number) => {
    if (selectedAnswers[current] !== null) return; // Prevent changing answer
    const updated = [...selectedAnswers];
    updated[current] = optIdx;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    setShowResults(false);
    setCurrent(0);
  };

  return (
    <div className="my-6 p-4 bg-white dark:bg-slate-800 border border-slate-300 rounded shadow max-w-xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-semibold text-lg">Quiz</span>
        <span className="text-sm">
          Correct:{" "}
          <span className="text-green-600 dark:text-green-400 font-bold">
            {correctCount}
          </span>
          {" / "}
          {questions.length}
        </span>
      </div>
      {!showResults ? (
        <div>
          <div className="pb-2 border-b border-slate-200">
            <p className="font-semibold mb-2">
              {current + 1}. {questions[current].question}
            </p>
            <ul className="space-y-2">
              {questions[current].options.map((opt, optIdx) => {
                const isCorrect = optIdx === questions[current].answer;
                const isSelected = selectedAnswers[current] === optIdx;
                const showFeedback = selectedAnswers[current] !== null;
                let borderColor = "border-slate-300";
                let bgColor = "";
                if (showFeedback) {
                  if (isSelected && isCorrect) {
                    borderColor = "border-green-500";
                    bgColor = "bg-green-100 dark:bg-green-700/30";
                  } else if (isSelected && !isCorrect) {
                    borderColor = "border-red-500";
                    bgColor = "bg-red-100 dark:bg-red-700/30";
                  } else if (isCorrect) {
                    borderColor = "border-green-300";
                  } else {
                    borderColor = "border-slate-200";
                  }
                }
                return (
                  <li
                    key={optIdx}
                    onClick={() => !showFeedback && handleSelect(optIdx)}
                    className={`cursor-pointer p-2 border rounded ${borderColor} ${bgColor} hover:bg-slate-100 dark:hover:bg-slate-700 transition`}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>
            {selectedAnswers[current] !== null && (
              <div className="mt-2 text-sm">
                {selectedAnswers[current] === questions[current].answer ? (
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    Correct!
                  </span>
                ) : (
                  <span className="text-red-600 dark:text-red-400 font-semibold">
                    Incorrect. Correct answer:{" "}
                    <em>
                      {questions[current].options[questions[current].answer]}
                    </em>
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded disabled:opacity-50"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
              onClick={handleNext}
              disabled={selectedAnswers[current] === null}
            >
              {current === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center">
          {correctCount === questions.length ? (
            <div className="text-green-700 dark:text-green-400 font-bold text-lg mb-2">
              🎉 Passed! All answers are correct.
            </div>
          ) : (
            <div className="text-red-700 dark:text-red-400 font-bold text-lg mb-2">
              You got {correctCount} out of {questions.length} correct.
            </div>
          )}
          <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={handleReset}
          >
            Redo Quiz
          </button>
        </div>
      )}
    </div>
  );
};

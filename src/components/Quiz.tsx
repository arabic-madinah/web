// components/Quiz.tsx
import { useState } from "react";

interface QuizProps {
  question: string;
  options: string[];
  answer: number; // index of correct answer
}

export const Quiz = ({ question, options, answer }: QuizProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    setSelected(index);
    setShowResult(true);
  };

  return (
    <div className="my-6 p-4 bg-white dark:bg-slate-800 border border-slate-300 rounded shadow">
      <p className="font-semibold text-lg mb-3">{question}</p>
      <ul className="space-y-2">
        {options.map((opt, i) => {
          const isCorrect = i === answer;
          const isSelected = selected === i;
          const borderColor = !showResult
            ? "border-slate-300"
            : isSelected && isCorrect
            ? "border-green-500 bg-green-100 dark:bg-green-700/30"
            : isSelected && !isCorrect
            ? "border-red-500 bg-red-100 dark:bg-red-700/30"
            : "border-slate-200";

          return (
            <li
              key={i}
              onClick={() => !showResult && handleSelect(i)}
              className={`cursor-pointer p-2 border rounded ${borderColor} hover:bg-slate-100 dark:hover:bg-slate-700 transition`}
            >
              {opt}
            </li>
          );
        })}
      </ul>
      {showResult && (
        <div className="mt-4 text-sm">
          {selected === answer ? (
            <p className="text-green-600 dark:text-green-400 font-semibold">
              Correct!
            </p>
          ) : (
            <p className="text-red-600 dark:text-red-400 font-semibold">
              Incorrect. Correct answer: <em>{options[answer]}</em>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

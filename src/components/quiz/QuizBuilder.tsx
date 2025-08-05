import { useState } from "react";

export interface QuizBuilderProps {
  onCreate: (snippet: string) => void;
  onCancel?: () => void;
}

interface BuilderQuestion {
  question: string;
  options: string[];
  answer: number;
}

const emptyQuestion = (): BuilderQuestion => ({
  question: "",
  options: ["", ""],
  answer: -1,
});

export const QuizBuilder = ({ onCreate, onCancel }: QuizBuilderProps) => {
  const [questions, setQuestions] = useState<BuilderQuestion[]>([
    emptyQuestion(),
  ]);
  const [current, setCurrent] = useState(0);

  // Error state for validation
  const [error, setError] = useState<{
    question?: boolean;
    options?: boolean[];
    answer?: boolean;
    message?: string;
  }>({});

  const currentQ = questions[current];

  const updateCurrentQuestion = (patch: Partial<BuilderQuestion>) => {
    setQuestions((prev) =>
      prev.map((q, idx) => (idx === current ? { ...q, ...patch } : q)),
    );
    setError({}); // Clear error on change
  };

  const updateOption = (idx: number, value: string) => {
    setQuestions((prev) =>
      prev.map((q, qIdx) =>
        qIdx === current
          ? {
              ...q,
              options: q.options.map((opt, oIdx) =>
                oIdx === idx ? value : opt,
              ),
            }
          : q,
      ),
    );
    setError({}); // Clear error on change
  };

  const addOption = () => {
    if (currentQ.options.length >= 5) return;
    updateCurrentQuestion({ options: [...currentQ.options, ""] });
  };

  const removeOption = (idx: number) => {
    if (currentQ.options.length <= 2) return;
    const newOptions = currentQ.options.filter((_, i) => i !== idx);
    let newAnswer = currentQ.answer;
    if (idx === currentQ.answer) newAnswer = -1;
    else if (idx < currentQ.answer) newAnswer = currentQ.answer - 1;
    updateCurrentQuestion({ options: newOptions, answer: newAnswer });
  };

  const addQuestion = () => {
    setQuestions([...questions, emptyQuestion()]);
    setCurrent(questions.length);
    setError({});
  };

  const removeQuestion = (idx: number) => {
    if (questions.length <= 1) return;
    const newQuestions = questions.filter((_, i) => i !== idx);
    setQuestions(newQuestions);
    setCurrent((c) => (c > idx ? c - 1 : Math.max(0, c - (c === idx ? 1 : 0))));
    setError({});
  };

  const handleCreate = () => {
    // Validate all questions
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const trimmedOptions = q.options.map((a) => a.trim());
      let err: typeof error = {};
      if (!q.question.trim()) {
        err = {
          question: true,
          message: `Please enter a question for Q${i + 1}.`,
        };
        setCurrent(i);
        setError(err);
        return;
      }
      const optionErrors = trimmedOptions.map((opt) => !opt);
      if (trimmedOptions.filter(Boolean).length < 2) {
        err = {
          options: optionErrors,
          message: `Please provide at least two options for Q${i + 1}.`,
        };
        setCurrent(i);
        setError(err);
        return;
      }
      if (optionErrors.some(Boolean)) {
        err = {
          options: optionErrors,
          message: `Please fill in all options for Q${i + 1}.`,
        };
        setCurrent(i);
        setError(err);
        return;
      }
      if (q.answer < 0 || q.answer >= trimmedOptions.length) {
        err = {
          answer: true,
          message: `Please select a correct answer for Q${i + 1}.`,
        };
        setCurrent(i);
        setError(err);
        return;
      }
    }

    // Build the snippet as a QuizProps object
    const quizQuestions = questions.map((q) => ({
      question: q.question.trim(),
      options: q.options.map((a) => a.trim()),
      answer: q.answer,
    }));

    const snippet = `<Quiz questions={${JSON.stringify(quizQuestions, null, 2)}} />`;
    setError({});
    onCreate(snippet);
  };

  return (
    <div className="space-y-6 w-full max-w-2xl p-6 bg-white dark:bg-slate-900 rounded-lg shadow border border-slate-200">
      <div className="flex items-center justify-between">
        <div className="font-bold text-lg">Quiz Builder</div>
        <div className="flex gap-2">
          {questions.map((_, idx) => (
            <button
              key={idx}
              className={`w-8 h-8 rounded-full border text-sm font-semibold transition
                ${
                  idx === current
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-700 dark:text-slate-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                }`}
              onClick={() => {
                setCurrent(idx);
                setError({});
              }}
              title={`Go to question ${idx + 1}`}
              type="button"
            >
              {idx + 1}
            </button>
          ))}
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-green-500 text-green-600 font-bold hover:bg-green-100 dark:hover:bg-green-900 transition"
            onClick={addQuestion}
            title="Add question"
          >
            +
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Question {current + 1}
          </label>
          <input
            type="text"
            value={currentQ.question}
            onChange={(e) =>
              updateCurrentQuestion({ question: e.target.value })
            }
            className={`w-full px-3 py-2 border rounded bg-white dark:bg-slate-800 text-black dark:text-white ${
              error.question ? "border-red-500" : ""
            }`}
          />
        </div>

        <div className="space-y-2">
          {currentQ.options.map((answer, index) => {
            const isCorrect = currentQ.answer === index;
            return (
              <div key={index} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCurrentQuestion({ answer: index })}
                  className={`
                    flex items-center w-full px-3 py-2 rounded border transition
                    ${
                      isCorrect
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 shadow"
                        : "border-slate-300 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    }
                    focus:outline-none focus:ring-2 focus:ring-blue-400
                  `}
                  title="Mark as correct"
                  style={{ flex: "1 1 0%" }}
                >
                  <span
                    className={`
                      w-4 h-4 mr-2 flex items-center justify-center rounded-full border
                      ${
                        isCorrect
                          ? "border-blue-600 bg-blue-600"
                          : "border-slate-400 bg-white dark:bg-slate-700"
                      }
                    `}
                  >
                    {isCorrect && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                  <input
                    type="text"
                    value={answer}
                    placeholder={`Answer ${index + 1}`}
                    onChange={(e) => updateOption(index, e.target.value)}
                    className={`flex-grow bg-transparent border-none outline-none p-0 m-0 text-black dark:text-white ${
                      error.options && error.options[index]
                        ? "border-b border-red-500"
                        : ""
                    }`}
                  />
                </button>
                {currentQ.options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeOption(index)}
                    className="ml-1 px-2 py-1 rounded bg-red-100 dark:bg-red-900 text-red-200 text-xs hover:bg-red-200 dark:hover:bg-red-800 transition"
                    title="Remove this answer"
                    style={{ flex: "0 0 auto" }}
                  >
                    &times;
                  </button>
                )}
              </div>
            );
          })}

          {currentQ.options.length < 5 && (
            <button
              type="button"
              onClick={addOption}
              className="text-sm text-blue-600 dark:text-blue-300 hover:underline"
            >
              + Add another answer
            </button>
          )}
        </div>
        {error.message && (
          <div className="text-red-600 text-sm mt-2">{error.message}</div>
        )}
      </div>

      <div className="flex justify-between items-center pt-2">
        <div className="flex gap-2">
          {questions.length > 1 && (
            <button
              type="button"
              onClick={() => removeQuestion(current)}
              className="px-3 py-1 rounded bg-red-100 dark:bg-red-900 text-red-600 hover:bg-red-200 dark:hover:bg-red-800 transition text-sm"
            >
              Remove Question
            </button>
          )}
        </div>
        <div className="flex gap-3">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-1 rounded bg-gray-300 dark:bg-gray-600"
            >
              Cancel
            </button>
          )}
          <button
            type="button"
            onClick={handleCreate}
            className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 shadow"
          >
            Insert Quiz
          </button>
        </div>
      </div>
      <div className="pt-2">
        <div className="text-xs text-slate-500 mb-1">Preview snippet:</div>
        <pre className="bg-slate-100 dark:bg-slate-800 text-black dark:text-gray-200 rounded p-2 text-xs overflow-x-auto">
          {`<Quiz questions={${JSON.stringify(
            questions.map((q) => ({
              question: q.question.trim(),
              options: q.options.map((a) => a.trim()),
              answer: q.answer,
            })),
            null,
            2,
          )}} />`}
        </pre>
      </div>
    </div>
  );
};

import { useState } from "react";

export interface QuizBuilderProps {
  onCreate: (snippet: string) => void;
  onCancel?: () => void;
}

export const QuizBuilder = ({ onCreate, onCancel }: QuizBuilderProps) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", ""]);
  const [correctIndex, setCorrectIndex] = useState<number>(-1);

  const updateAnswer = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const addAnswer = () => {
    if (answers.length >= 5) return;
    setAnswers([...answers, ""]);
  };

  const handleCreate = () => {
    const trimmedAnswers = answers.map((a) => a.trim()).filter(Boolean);

    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }
    if (trimmedAnswers.length < 2) {
      alert("Please provide at least two answers.");
      return;
    }
    if (correctIndex < 0 || correctIndex >= trimmedAnswers.length) {
      alert("Please select a correct answer.");
      return;
    }

    const snippet = `<Quiz question="${question.trim()}" answers={${JSON.stringify(
      trimmedAnswers
    )}} correct={${correctIndex}} />`;

    onCreate(snippet);
  };

  return (
    <div className="space-y-4 w-full max-w-md p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Question
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full px-3 py-2 border rounded bg-white dark:bg-slate-800 text-black dark:text-white"
        />
      </div>

      <div className="space-y-2">
        {answers.map((answer, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              value={answer}
              placeholder={`Answer ${index + 1}`}
              onChange={(e) => updateAnswer(index, e.target.value)}
              className="flex-grow px-3 py-2 border rounded bg-white dark:bg-slate-800 text-black dark:text-white"
            />
            <input
              type="radio"
              name="correct"
              checked={correctIndex === index}
              onChange={() => setCorrectIndex(index)}
              title="Mark as correct"
            />
          </div>
        ))}

        {answers.length < 5 && (
          <button
            type="button"
            onClick={addAnswer}
            className="text-sm text-blue-600 dark:text-blue-300 hover:underline"
          >
            + Add another answer
          </button>
        )}
      </div>

      <div className="flex justify-end gap-3 pt-2">
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
          className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Insert Quiz
        </button>
      </div>
    </div>
  );
};

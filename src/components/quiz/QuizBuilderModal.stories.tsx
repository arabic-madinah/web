import { useState } from "react";
import { QuizBuilderModal } from "./QuizBuilderModal";

export default {
  title: "Components/QuizBuilderModal",
  component: QuizBuilderModal,
};

export const Default = () => {
  const [open, setOpen] = useState(true);
  const [snippet, setSnippet] = useState<string | null>(null);

  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => {
          setOpen(true);
          setSnippet(null);
        }}
      >
        Open Quiz Builder Modal
      </button>
      <QuizBuilderModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onInsert={(s) => {
          setSnippet(s);
          setOpen(false);
        }}
      />
      {snippet && (
        <div className="mt-6">
          <div className="mb-2 text-black font-semibold">
            Quiz snippet created:
          </div>
          <pre className="bg-slate-100 dark:bg-slate-800 text-black dark:text-white rounded p-2 text-xs overflow-x-auto">
            {snippet}
          </pre>
        </div>
      )}
    </div>
  );
};

// components/MdxToolbar.tsx
import { useState, type FC } from "react";
import { QuizBuilderModal } from "../QuizBuilderModal.tsx";

type MdxToolbarProps = {
  onInsert: (snippet: string) => void;
  viewMode?: "split" | "editor" | "preview";
  setViewMode?: (mode: "split" | "editor" | "preview") => void;
};

export const MdxToolbar: FC<MdxToolbarProps> = ({
  onInsert,
  viewMode,
  setViewMode,
}) => {
  const [quizOpen, setQuizOpen] = useState(false);
  const handleQuizInsert = (snippet: string) => {
    onInsert(snippet);
    setQuizOpen(false);
  };

  return (
    <>
      <div className="flex space-x-2 mb-2">
        <button
          type={"button"}
          onClick={() => onInsert("<Note>This is a note</Note>\n")}
          className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded hover:bg-slate-300 dark:hover:bg-slate-600"
        >
          Insert Note
        </button>

        <button
          onClick={() => setQuizOpen(true)}
          className="px-3 py-1 bg-yellow-300 text-black rounded hover:bg-yellow-400"
        >
          Insert Quiz
        </button>

        <div className="flex gap-2 items-center">
          <button
            type={"button"}
            className={viewMode === "editor" ? "text-blue-500 font-bold" : ""}
            onClick={() => setViewMode?.("editor")}
          >
            📝 Editor
          </button>
          <button
            type={"button"}
            className={viewMode === "preview" ? "text-blue-500 font-bold" : ""}
            onClick={() => setViewMode?.("preview")}
          >
            👁️ Preview
          </button>
          <button
            type={"button"}
            className={viewMode === "split" ? "text-blue-500 font-bold" : ""}
            onClick={() => setViewMode?.("split")}
          >
            🧩 Split
          </button>
        </div>
      </div>

      <QuizBuilderModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onInsert={handleQuizInsert}
      />
    </>
  );
};

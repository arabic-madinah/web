import { useEffect } from "react";
import { QuizBuilder } from "./QuizBuilder.tsx";

type QuizBuilderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (snippet: string) => void;
};

export const QuizBuilderModal = ({
  isOpen,
  onClose,
  onInsert,
}: QuizBuilderModalProps) => {
  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal container */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 flex items-center justify-center p-4 z-50"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg max-w-md w-full p-6">
          {/* Title */}
          <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
            Create Quiz
          </h2>

          {/* QuizBuilder component */}
          <QuizBuilder onCreate={onInsert} onCancel={onClose} />
        </div>
      </div>
    </>
  );
};

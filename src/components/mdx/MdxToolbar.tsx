import { useState, type FC } from "react";
import { QuizBuilderModal } from "../quiz/QuizBuilderModal.tsx";
import { Button } from "@headlessui/react";
import {
  Eye,
  ListChecks,
  SquareCode,
  SquareSplitHorizontal,
  StickyNote,
} from "lucide-react";
import classNames from "classnames";

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
      <div className={"flex justify-between items-center"}>
        {/* Left side Toolbar buttons */}
        <div className="flex space-x-1">
          <Button
            type={"button"}
            onClick={() => onInsert("<Note>This is a note</Note>\n")}
            className="inline-flex items-center gap-2 px-2 py-1.5 data-hover:bg-gray-600"
          >
            <StickyNote size={20} /> Note
          </Button>

          <Button
            type={"button"}
            onClick={() => setQuizOpen(true)}
            className="inline-flex items-center gap-2 px-2 py-1.5 data-hover:bg-gray-600"
          >
            <ListChecks size={20} /> Quiz
          </Button>
        </div>

        {/* Right side: View mode toggle */}

        <div className="flex items-center">
          <Button
            type={"button"}
            className={classNames("px-2 py-1.5 data-hover:bg-gray-600", {
              "text-blue-500 font-bold": viewMode === "editor",
            })}
            onClick={() => setViewMode?.("editor")}
          >
            <SquareCode size={20} />
          </Button>
          <Button
            type={"button"}
            className={classNames("px-2 py-1.5 data-hover:bg-gray-600", {
              "text-blue-500 font-bold": viewMode === "split",
            })}
            onClick={() => setViewMode?.("split")}
          >
            <SquareSplitHorizontal size={20} />
          </Button>
          <Button
            type={"button"}
            className={classNames("px-2 py-1.5 data-hover:bg-gray-600", {
              "text-blue-500 font-bold": viewMode === "preview",
            })}
            onClick={() => setViewMode?.("preview")}
          >
            <Eye size={20} />
          </Button>
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

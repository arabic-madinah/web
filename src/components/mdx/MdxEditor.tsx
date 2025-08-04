import { type FC, useRef, useState } from "react";
import { MdxToolbar } from "./MdxToolbar.tsx";
import MdxRenderer from "./MdxRenderer.tsx";

interface MdxEditorProps {
  defaultValue?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const MdxEditor: FC<MdxEditorProps> = ({ defaultValue, value, onChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [viewMode, setViewMode] = useState<"split" | "editor" | "preview">(
    "split",
  );

  const insertAtCursor = (snippet: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = value.slice(0, start) + snippet + value.slice(end);

    onChange?.(newValue);

    // Reset cursor after insertion
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + snippet.length;
    }, 0);
  };

  return (
    <div className="flex flex-col flex-grow overflow-y-auto">
      {/* Toolbar on top full width */}
      <div className="px-2 border-b border-gray-300 dark:border-gray-700">
        <MdxToolbar
          onInsert={insertAtCursor}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>

      {/* Bottom split: Textarea + Preview */}
      <div className="flex flex-grow">
        {/* Left side: Textarea */}
        {(viewMode === "split" || viewMode === "editor") && (
          <div
            className={`${viewMode === "split" ? "w-1/2" : "w-full"} flex flex-col`}
          >
            <textarea
              defaultValue={defaultValue}
              ref={textareaRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="dark flex-grow p-4 font-mono text-sm bg-transparent
           text-gray-200 dark:text-gray-200 outline-none resize-none
           border border-transparent caret-transparent
           hover:border-blue-400 hover:caret-blue-500
           focus:border-blue-400 focus:caret-blue-500"
            />
          </div>
        )}

        {/* Right side: Live Preview */}
        {(viewMode === "split" || viewMode === "preview") && (
          <div
            className={`${viewMode === "split" ? "w-1/2" : "w-full"} flex flex-col h-full overflow-auto p-6  text-gray-200 dark:text-white`}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MdxRenderer content={value} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MdxEditor;

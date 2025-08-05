import { type FC, useRef, useState } from "react";
import { MdxToolbar } from "./MdxToolbar.tsx";
import MdxRenderer from "./MdxRenderer.tsx";
import ReactCodeMirror, {
  type ReactCodeMirrorRef,
} from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

interface MdxEditorProps {
  defaultValue?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const MdxEditor: FC<MdxEditorProps> = ({ defaultValue, value, onChange }) => {
  const ref = useRef<ReactCodeMirrorRef>(null);
  const [viewMode, setViewMode] = useState<"split" | "editor" | "preview">(
    "split",
  );

  const insertAtCursor = (snippet: string, cursorOffset: number = 0) => {
    const codeMirrorRef = ref.current;

    const view = codeMirrorRef?.view;

    if (!view) {
      return;
    }

    const { from } = view.state.selection.main;

    const replace = view.state.replaceSelection(snippet);

    view.dispatch({
      ...replace,
      selection: cursorOffset
        ? { anchor: from + cursorOffset }
        : replace.selection,
      scrollIntoView: true,
    });

    setTimeout(() => {
      view.focus();
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
            <ReactCodeMirror
              defaultValue={defaultValue}
              ref={ref}
              value={value}
              onChange={(value) => {
                console.log({ onChange, value });
                onChange(value);
              }}
              theme={vscodeDark}
              className="flex-grow text-black
           outline-none resize-none
           border border-transparent caret-transparent
           hover:border-blue-400 hover:caret-blue-500
           focus:border-blue-400 focus:caret-blue-500"
              extensions={[markdown(), javascript({ jsx: true })]}
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

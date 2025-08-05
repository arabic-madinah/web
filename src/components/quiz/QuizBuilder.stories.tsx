import { useState } from "react";
import { QuizBuilder } from "./QuizBuilder";

export default {
  title: "Components/QuizBuilder",
  component: QuizBuilder,
};

export const Default = () => {
  const [snippet, setSnippet] = useState<string | null>(null);

  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      {!snippet ? (
        <QuizBuilder onCreate={setSnippet} />
      ) : (
        <div>
          <div className="mb-4 text-green-700 font-semibold">
            Quiz snippet created:
          </div>
          <pre className="bg-slate-100 text-black dark:text-white rounded p-2 text-xs overflow-x-auto">
            {snippet}
          </pre>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setSnippet(null)}
          >
            Build Another Quiz
          </button>
        </div>
      )}
    </div>
  );
};

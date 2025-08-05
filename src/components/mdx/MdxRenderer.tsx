import { type DetailedHTMLProps, type FC, type HTMLAttributes } from "react";
import useRenderMdx from "../../hooks/useRenderMdx.tsx";
import { MDXProvider } from "@mdx-js/react";
import { Quiz, type QuizProps } from "../quiz/Quiz.tsx";
import Note from "../Note.tsx";
import RedText from "../text/RedText.tsx";
import BlueText from "../text/BlueText.tsx";
import { ErrorBoundary } from "react-error-boundary";
import MdxError from "./MdxError.tsx";

export interface MdxRendererProps {
  content?: string;
}

const components = {
  Quiz: (props: Partial<QuizProps>) => {
    if (!props.questions) {
      return (
        <span className="text-red-600">
          Missing required property 'questions' in Quiz component.
        </span>
      );
    }

    return <Quiz questions={props.questions} />;
  },
  Note,
  RedText,
  BlueText,
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => <h3 className="text-xl font-semibold mb-2" {...props} />,
  h4: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => <h4 className="text-lg font-semibold mb-2" {...props} />,
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
  ) => <p className="mb-4" {...props} />,
  ul: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >,
  ) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >,
  ) => <ol className="list-decimal list-inside mb-4" {...props} />,
  li: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>,
  ) => <li className="mb-2" {...props} />,
};

const MdxRenderer: FC<MdxRendererProps> = ({ content }) => {
  const { Component, isLoading: isRendering } = useRenderMdx(content || "");

  return isRendering ? (
    <div className="text-gray-500">Rendering content...</div>
  ) : (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <>
          <MdxError message={error?.toString()} />
          <button onClick={resetErrorBoundary}>Click to reset</button>
        </>
      )}
      onReset={(details) => {
        console.log("Error boundary reset", details);
      }}
    >
      <MDXProvider components={components}>
        <Component />
      </MDXProvider>
    </ErrorBoundary>
  );
};

export default MdxRenderer;

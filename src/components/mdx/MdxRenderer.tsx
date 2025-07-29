import { type DetailedHTMLProps, type FC, type HTMLAttributes } from "react";
import useRenderMdx from "../../hooks/useRenderMdx.tsx";
import { MDXProvider } from "@mdx-js/react";
import { Quiz } from "../Quiz.tsx";
import Note from "../Note.tsx";

export interface MdxRendererProps {
  content?: string;
}

const components = {
  Quiz,
  Note,
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => <h1 className="text-2xl font-bold mb-2" {...props} />,
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => <h2 className="text-xl font-semibold mb-2" {...props} />,
};

const MdxRenderer: FC<MdxRendererProps> = ({ content }) => {
  const { Component, isLoading: isRendering } = useRenderMdx(content || "");

  return isRendering ? (
    <div className="text-gray-500">Rendering content...</div>
  ) : (
    <MDXProvider components={components}>
      <Component />
    </MDXProvider>
  );
};

export default MdxRenderer;

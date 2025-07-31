import { type FC } from "react";
import useGetChapterBySlugQuery from "../queries/useGetChapterBySlugQuery.ts";
import MdxRenderer from "../components/mdx/MdxRenderer.tsx";

export interface ChapterPageProps {
  chapterId: string;
}

const ChapterPage: FC<ChapterPageProps> = ({ chapterId }) => {
  const { chapter, isLoading } = useGetChapterBySlugQuery(chapterId);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div>
      <div className={"text-3xl font-semibold"}>{chapter.title}</div>

      <div className="mt-4">
        <MdxRenderer content={chapter.content} />
      </div>
    </div>
  );
};

export default ChapterPage;

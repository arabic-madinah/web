import { type FC } from "react";
import useGetChapterBySlugQuery from "../queries/useGetChapterBySlugQuery.ts";
import MdxRenderer from "../components/mdx/MdxRenderer.tsx";
import PrimaryButton from "../components/PrimaryButton.tsx";
import { Edit } from "lucide-react";
import { Link } from "@tanstack/react-router";

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
      <div className={"flex flex-row justify-between"}>
        <div className={"text-4xl font-semibold"}>{chapter.title}</div>
        <Link to={"edit"}>
          <PrimaryButton className={"bg-transparent h-4"}>
            <Edit size={16} />
          </PrimaryButton>
        </Link>
      </div>

      <div className="mt-4 pb-8">
        <MdxRenderer content={chapter.content} />
      </div>
    </div>
  );
};

export default ChapterPage;

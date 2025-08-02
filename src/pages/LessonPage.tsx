import type { FC } from "react";
import useGetLessonBySlugQuery from "../queries/useGetLessonBySlugQuery.ts";
import MdxRenderer from "../components/mdx/MdxRenderer.tsx";
import { Link } from "@tanstack/react-router";
import PrimaryButton from "../components/PrimaryButton.tsx";
import { Edit } from "lucide-react";

export interface LessonPageProps {
  lessonId: string;
}

const LessonPage: FC<LessonPageProps> = ({ lessonId }) => {
  const { lesson, isLoading } = useGetLessonBySlugQuery(lessonId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div>
      <div className={"flex flex-row justify-between"}>
        <div className={"text-3xl font-semibold"}>{lesson.title}</div>
        <Link to={"edit"}>
          <PrimaryButton className={"bg-transparent h-4"}>
            <Edit size={16} />
          </PrimaryButton>
        </Link>
      </div>

      <div className="mt-4">
        <MdxRenderer content={lesson.content} />
      </div>
    </div>
  );
};
export default LessonPage;

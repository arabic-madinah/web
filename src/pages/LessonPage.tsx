import type { FC } from "react";
import useGetLessonBySlugQuery from "../queries/useGetLessonBySlugQuery.ts";
import MdxRenderer from "../components/mdx/MdxRenderer.tsx";

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
      <div className={"text-xl font-semibold"}>{lesson.title}</div>

      <div className="mt-4">
        <MdxRenderer content={lesson.content} />
      </div>
    </div>
  );
};
export default LessonPage;

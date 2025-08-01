import type { FC } from "react";
import useGetChaptersQuery from "../../queries/useGetChaptersQuery.ts";
import CourseOutlineDndEditor from "./CourseOutlineDndEditor.tsx";

const CourseOutlineEditor: FC = () => {
  const { chapters, isLoading } = useGetChaptersQuery();

  if (isLoading) return <div>Loading...</div>;

  if (!chapters) return <div>No chapters found</div>;

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">
        Drag a <span className="text-blue-400">chapter</span> or{" "}
        <span className="text-blue-400">lesson</span> to another location to
        re-structure the course.
      </h2>
      <CourseOutlineDndEditor initialState={chapters} />
    </>
  );
};
export default CourseOutlineEditor;

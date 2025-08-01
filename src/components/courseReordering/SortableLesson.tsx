import type { Lesson } from "../../queries/useGetChaptersQuery.ts";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/react/sortable";
import type { FC } from "react";

type SortableLessonProps = {
  lesson: Lesson;
  chapterId: UniqueIdentifier;
  index: number;
};

export const SortableLesson: FC<SortableLessonProps> = ({
  lesson,
  chapterId,
  index,
}) => {
  const { ref } = useSortable({
    id: lesson.id,
    index,
    group: chapterId,
    type: "lesson",
    accept: ["lesson"],
  });

  return (
    <button
      ref={ref}
      className={
        "bg-neutral-700 p-3 border-1 border-neutral-100 hover:border-blue-800 rounded shadow flex flex-col text-left gap-2 text-gray-100"
      }
    >
      {lesson.title}
    </button>
  );
};

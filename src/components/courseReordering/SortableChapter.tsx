import { useSortable } from "@dnd-kit/react/sortable";
import { CollisionPriority } from "@dnd-kit/abstract";
import type { Chapter } from "../../queries/useGetChaptersQuery.ts";
import type { FC, PropsWithChildren } from "react";
import { BookA } from "lucide-react";

type SortableChapterProps = {
  chapter: Chapter;
  index: number;
} & PropsWithChildren;

export const SortableChapter: FC<SortableChapterProps> = ({
  children,
  chapter,
  index,
}) => {
  const { ref } = useSortable({
    id: chapter.id,
    index,
    type: "chapter",
    accept: ["chapter", "lesson"],
    collisionPriority: CollisionPriority.Low,
  });

  return (
    <div
      className={
        "relative bg-zinc-800 p-4 rounded-md shadow flex flex-col gap-3 " +
        "border-1 border-gray-500 hover:border-blue-400 cursor-grab h-[400px]"
      }
      ref={ref}
    >
      <div
        className={
          "absolute top-0 left-0 p-1 border-r border-b rounded-sm border-gray-600 text-xs font-bold"
        }
      >
        {index}
      </div>
      <div className={"flex flex-row items-center gap-2"}>
        <BookA size={20} />
        <span className={"text-gray-300 text-xl"}>{chapter.title}</span>
      </div>

      {/* Scrollable lesson list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">{children}</div>
    </div>
  );
};

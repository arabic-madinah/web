import { type FC, useCallback, useState } from "react";

import { type DragDropEventHandlers, DragDropProvider } from "@dnd-kit/react";
import type { Chapter } from "../../queries/useGetChaptersQuery.ts";
import { SortableChapter } from "./SortableChapter.tsx";
import { SortableLesson } from "./SortableLesson.tsx";
import useReorderChaptersWithLessonsMutation from "../../queries/useReorderChaptersWithLessonsMutation.ts";
import { SaveAll } from "lucide-react";
import PrimaryButton from "../PrimaryButton.tsx";

type CourseOutlineDndEditorProps = {
  initialState: Chapter[];
};

const CourseOutlineDndEditor: FC<CourseOutlineDndEditorProps> = ({
  initialState,
}) => {
  const [chapters, setChapters] = useState<Chapter[]>(initialState);
  const { mutateAsync, isPending } = useReorderChaptersWithLessonsMutation();

  const lessonIndexMatrix = chapters.reduce(
    (acc, chapter, chapterIndex) => {
      chapter.lessons.forEach((lesson, lessonIndex) => {
        acc[lesson.id] = { chapterIndex, lessonIndex };
      });
      return acc;
    },
    {} as Record<string, { chapterIndex: number; lessonIndex: number }>,
  );

  const chapterIndexMatrix = chapters.reduce(
    (acc, chapter, index) => {
      acc[chapter.id] = index;
      return acc;
    },
    {} as Record<string, number>,
  );

  const handleSave = async () => {
    const reorderedChapters = chapters.map((chapter, index) => ({
      id: chapter.id,
      order: index,
      lessons: chapter.lessons.map((lesson, lessonIndex) => ({
        id: lesson.id,
        order: lessonIndex,
      })),
    }));

    try {
      await mutateAsync({ chapters: reorderedChapters });
    } catch (error) {
      console.error("Failed to save course outline:", error);
    }
  };

  return (
    <div className={"relative"}>
      {isPending && (
        <div className="absolute inset-0 z-10 bg-white/10 flex items-center justify-center pointer-events-none">
          <div className="h-8 w-8 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="absolute right-0 top-[-64px] z-10 py-2 space-x-2">
        <PrimaryButton
          type={"submit"}
          disabled={isPending}
          onClick={handleSave}
        >
          <SaveAll size={16} />
          Save
        </PrimaryButton>
      </div>

      <DragDropProvider
        onDragOver={useCallback<DragDropEventHandlers["onDragOver"]>(
          (event) => {
            const { source, target } = event.operation;

            if (source?.id === target?.id) {
              // No need to do anything to the state, if the source and target are the same
              return;
            }

            if (source?.type === "chapter" && target?.type === "chapter") {
              // If we are dragging a chapter over another chapter, we can just move the chapter
              setChapters((chapters) => {
                // 1. Remove the source chapter from its original location
                const newChapters = chapters.filter(
                  (col) => col.id !== source.id,
                );
                // 2. Insert the original chapter at the right location
                const sourceIndex = chapterIndexMatrix[source.id as string];
                const targetIndex = chapterIndexMatrix[target.id as string];
                newChapters.splice(targetIndex, 0, chapters[sourceIndex]);
                return newChapters;
              });
              return;
            }

            if (source?.type === "lesson" && target?.type === "lesson") {
              setChapters((chapters) => {
                // 1. Remove the lesson from the source chapter
                const newChapters = chapters.map((chapter) => ({
                  ...chapter,
                  lessons: chapter.lessons.filter(
                    (lesson) => lesson.id !== source.id,
                  ),
                }));

                // Move the lesson at the right chapter and lesson index
                const sourceChapterIndex =
                  lessonIndexMatrix[source.id].chapterIndex;
                const sourceLessonIndex =
                  lessonIndexMatrix[source.id].lessonIndex;
                const targetChapterIndex =
                  lessonIndexMatrix[target.id].chapterIndex;
                const targetLessonIndex =
                  lessonIndexMatrix[target.id].lessonIndex;
                newChapters[targetChapterIndex].lessons.splice(
                  targetLessonIndex,
                  0,
                  chapters[sourceChapterIndex].lessons[sourceLessonIndex],
                );

                return newChapters;
              });
              return;
            }

            if (source?.type === "lesson" && target?.type === "chapter") {
              setChapters((chapters) => {
                // 1. Remove the lesson from the source chapter
                const newChapters = chapters.map((chapter) => ({
                  ...chapter,
                  lessons: chapter.lessons.filter(
                    (lesson) => lesson.id !== source.id,
                  ),
                }));
                // 2. Add the lesson to the target chapter
                const sourceChapterIndex =
                  lessonIndexMatrix[source.id].chapterIndex;
                const sourceLessonIndex =
                  lessonIndexMatrix[source.id].lessonIndex;
                const targetChapterIndex =
                  chapterIndexMatrix[target.id as string];
                const lesson =
                  chapters[sourceChapterIndex].lessons[sourceLessonIndex];
                newChapters[targetChapterIndex].lessons.push(lesson);

                return newChapters;
              });
              return;
            }
          },
          [chapterIndexMatrix, lessonIndexMatrix],
        )}
      >
        <div className="grid grid-cols-3 gap-4">
          {chapters.map((chapter, chapterIndex) => (
            <SortableChapter
              key={chapter.id}
              chapter={chapter}
              index={chapterIndex}
            >
              {chapter.lessons.map((lesson, index) => (
                <SortableLesson
                  key={lesson.id}
                  lesson={lesson}
                  index={index}
                  chapterId={chapter.id}
                />
              ))}
            </SortableChapter>
          ))}
        </div>
      </DragDropProvider>
    </div>
  );
};
export default CourseOutlineDndEditor;

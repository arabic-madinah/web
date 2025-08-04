import useGetChaptersQuery, {
  type Chapter,
  type Lesson,
} from "@/queries/useGetChaptersQuery.ts";
import { useMemo } from "react";
import Fuse from "fuse.js";

interface SearchItem {
  type: "/chapters/" | "/lessons/";
  slug: string;
  data: Chapter | Lesson;
}

export const useSearchRoutes = () => {
  const { chapters } = useGetChaptersQuery();

  // Flatten chapters and lessons for searching
  const searchData: SearchItem[] = useMemo(() => {
    const chapterItems = chapters.map<SearchItem>((chapter: Chapter) => ({
      type: "/chapters/",
      slug: chapter.slug,
      data: chapter,
    }));
    const lessonItems = chapters.flatMap<SearchItem>((chapter: Chapter) =>
      (chapter.lessons || []).map((lesson: Lesson) => ({
        type: "/lessons/",
        slug: lesson.slug,
        data: lesson,
      })),
    );
    return [...chapterItems, ...lessonItems];
  }, [chapters]);

  // Set up Fuse.js
  const fuse = useMemo(
    () =>
      new Fuse(searchData, {
        keys: ["slug", "data.title"],
        threshold: 0.4,
      }),
    [searchData],
  );

  // Search function
  const search = (query: string) => {
    if (!query) return [];
    return fuse.search(query).map((result) => result.item);
  };

  return { search };
};

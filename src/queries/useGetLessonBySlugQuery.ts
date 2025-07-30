import { useQuery } from "@tanstack/react-query";
import { http } from "./http.ts";

type Chapter = {
  id: string;
  title: string;
  slug: string;
};

type Lesson = {
  id: string;
  title: string;
  slug: string;
  order: number;
  content: string;
  chapter: Chapter;
};

export default function useGetLessonBySlugQuery(slug: string) {
  const { data, ...query } = useQuery({
    queryKey: ["chapters", "lessons", slug],
    queryFn: async () => {
      return await http.get<Lesson>(`/api/lessons/${slug}`);
    },
  });

  return {
    lesson: data?.data || null,
    ...query,
  };
}

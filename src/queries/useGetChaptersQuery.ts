import { useQuery } from "@tanstack/react-query";
import { http } from "./http.ts";

export type Lesson = {
  id: string;
  chapterId: string;
  title: string;
  slug: string;
  order: number;
  content: string;
};

export type Chapter = {
  id: string;
  title: string;
  slug: string;
  order: number;
  lessons: Lesson[];
};

export interface GetChaptersResponse {
  chapters: Chapter[];
}

export default function useGetChaptersQuery() {
  const { data, ...query } = useQuery({
    queryKey: ["chapters"],
    queryFn: async () => {
      return await http.get<GetChaptersResponse>("/api/chapters");
    },
  });

  return {
    chapters: data?.data.chapters || [],
    ...query,
  };
}

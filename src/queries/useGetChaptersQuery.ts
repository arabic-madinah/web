import { useQuery } from "@tanstack/react-query";
import { http } from "./http.ts";
import { createRouteMap } from "../utils/routeMap/createRouteMap.ts";

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

  const chapters = data?.data.chapters || [];
  const routeMap = createRouteMap(chapters);

  return {
    chapters,
    routeMap,
    ...query,
  };
}

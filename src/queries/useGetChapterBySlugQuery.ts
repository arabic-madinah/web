import {useQuery} from "@tanstack/react-query";
import {http} from "./http.ts";

type Chapter = {
  id: string;
  title: string;
  slug: string;
  order: number;
  createdAt: string;
  updatedAt: string|null;
}

export default function useGetChapterBySlugQuery(slug: string) {
  const {data, ...query} = useQuery({
    queryKey: ["chapters", slug],
    queryFn: async () => {
      return await http.get<Chapter>(`/api/chapters/${slug}`);
    },
  });

  return {
    chapter: data?.data || null,
    ...query,
  };
}
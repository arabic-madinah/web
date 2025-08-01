import { useMutation, useQueryClient } from "@tanstack/react-query";
import { http } from "./http.ts";

export type ReorderChaptersWithLessonsRequest = {
  chapters: {
    id: string;
    order: number;
    lessons: {
      id: string;
      order: number;
    }[];
  }[];
};

export default function useReorderChaptersWithLessonsMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["chapters", "reorder"],
    mutationFn: async (data: ReorderChaptersWithLessonsRequest) => {
      return await http.post(`/api/reorder`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chapters"],
      });
    },
  });
}

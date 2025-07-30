import { http } from "./http.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type CreateLessonRequest = {
  title: string;
  slug: string;
  order: number | null;
  content: string;
  chapterId: string;
};

export default function useCreateLessonMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["lessons"],
    mutationFn: async (data: CreateLessonRequest) => {
      return await http.post(`/api/lessons`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chapters"],
      });
    },
  });
}

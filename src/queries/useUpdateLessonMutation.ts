import { useMutation, useQueryClient } from "@tanstack/react-query";
import { http } from "./http.ts";

export type UpdateLessonRequest = {
  id: string;
  title?: string | null;
  slug?: string | null;
  order?: number | null;
  content?: string | null;
};

export default function useUpdateLessonMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["lessons"],
    mutationFn: async (data: UpdateLessonRequest) => {
      return await http.patch(`/api/lessons/${data.id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chapters"],
      });
    },
  });
}

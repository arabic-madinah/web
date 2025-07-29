import { http } from "./http.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type UpdateChapterRequest = {
  id: string;
  title: string | null;
  slug: string | null;
  order: number | null;
};

export default function useUpdateChapterMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["chapters"],
    mutationFn: async (data: UpdateChapterRequest) => {
      return await http.patch(`/api/chapters/${data.id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chapters"],
      });
    },
  });
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { http } from "./http.ts";

export type CreateChapterRequest = {
  title: string;
  slug: string;
  order: number | null;
};

export default function useCreateChapterMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["chapters"],
    mutationFn: async (data: CreateChapterRequest) => {
      return await http.post(`/api/chapters`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chapters"],
      });
    },
  });
}

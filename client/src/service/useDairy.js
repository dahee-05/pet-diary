import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getList, getOpenAI, diarySave } from "../service/api";

export const useDiaryList = () => {
  return useQuery({
    queryKey: ["list"],
    queryFn: getList,
    staleTime: 1000 * 60 * 1,
    gcTime: 1000 * 60 * 5,
  });
};

export const useOpenAIDiary = (diary) => {
  return useQuery({
    queryKey: ["openai", diary],
    queryFn: () => getOpenAI(diary),
    enabled: !!diary,
  });
};

export const useSaveDiary = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: diarySave, //diarySave(item)
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["list"] });
    },
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { solveQuery as solveQueryApi } from "../services/enquiry";
import toast from "react-hot-toast";

export default function useSolveQuery() {
  const queryClient = useQueryClient();

  const { mutate: solveQuery, isLoading } = useMutation({
    mutationFn: solveQueryApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["active-queries"]);
      queryClient.invalidateQueries(["solved-queries"]);
      toast.success("Query is Solved");
    },
  });

  return { solveQuery, isLoading };
}

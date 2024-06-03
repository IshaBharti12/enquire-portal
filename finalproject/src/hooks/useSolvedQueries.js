import { useQuery } from "@tanstack/react-query";
import { getSolvedQueries } from "../services/enquiry";

export default function useSolvedQueries() {
  const { data: solvedQueries, isLoading } = useQuery({
    queryKey: ["solved-queries"],
    queryFn: getSolvedQueries,
  });

  return { solvedQueries, isLoading };
}

import { useQuery } from "@tanstack/react-query";
import { getActiveQueries } from "../services/enquiry";

export default function useActiveQuries() {
  const { data: activeQueries, isLoading } = useQuery({
    queryKey: ["active-query"],
    queryFn: getActiveQueries,
  });

  return { activeQueries, isLoading };
}

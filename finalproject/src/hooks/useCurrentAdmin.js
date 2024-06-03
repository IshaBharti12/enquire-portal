import { useQuery } from "@tanstack/react-query";
import { getCurrentAdmin } from "../services/admin";

export default function useCurrentAdmin() {
  const { data: admin, isLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: getCurrentAdmin,
    retry: 1,
  });

  return { admin, isLoading };
}

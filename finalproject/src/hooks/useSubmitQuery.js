import { useMutation } from "@tanstack/react-query";
import { submitQuery as submitQueryApi } from "../services/enquiry";
import toast from "react-hot-toast";

export default function useSubmitQuery() {
  const { mutate: submitQuery, isLoading } = useMutation({
    mutationFn: submitQueryApi,
    onSuccess: () => {
      toast.success("Query Submitted Successfully");
    },
  });

  return { submitQuery };
}

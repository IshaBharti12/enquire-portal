import { useMutation } from "@tanstack/react-query";
import { login } from "../services/admin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLoginAdmin() {
  const navigate = useNavigate();
  const { mutate: adminLogin, isLoading: loggingAdmin } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/admin");
      toast.success("Login Successfull");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { adminLogin, loggingAdmin };
}

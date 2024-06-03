import { useMutation } from "@tanstack/react-query";
import { logout } from "../services/admin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogoutAdmin() {
  const navigate = useNavigate();
  const { mutate: logoutAdmin, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/login");
      toast.success("Logged Out Successfully");
    },
  });

  return { logoutAdmin };
}

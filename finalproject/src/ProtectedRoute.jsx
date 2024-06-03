import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentAdmin from "./hooks/useCurrentAdmin";

export default function ProtectedRoute({ children }) {
  const { admin, isLoading } = useCurrentAdmin();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isLoading && !admin) {
        navigate("/login");
      }
    },
    [admin, isLoading, navigate]
  );

  if (isLoading) return null;

  if (admin) return children;
}

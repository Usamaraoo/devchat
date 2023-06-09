import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// if user logged in
const GuestUser = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return !auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
export default GuestUser;

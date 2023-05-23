import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshtoken from "../hooks/useRefreshtoken";
import useAuth from "../hooks/useAuth";

export default function PresistLogin() {
  const [isLoading, setLoading] = useState(true);
  const refresh = useRefreshtoken();
  const { auth } = useAuth();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    !auth?.accessToken ? verifyRefreshToken() : setLoading(false);
  }, []);

  useEffect(() => {
  }, [isLoading]);

  return <>{isLoading ? <p>Loading....</p> : <Outlet />}</>;
}

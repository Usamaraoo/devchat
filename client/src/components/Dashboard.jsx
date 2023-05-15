import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../apies/axios";
import useRefreshtoken from "../hooks/useRefreshtoken";

export default function Dashboard() {
  const refresh = useRefreshtoken();
  const [user, setUser] = useState({});
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUserInfo = async () => {
      try {
        const res = await axios.get("/api/user/info/usamakaleem505@gmail.com", {
          signal: controller.signal,
        });
        if (res.status === 200) {
          console.log(res.data);
          const userData = await res.data;
          isMounted && setUser(userData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // getUserInfo();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div>
      <button className="bg-green-400 px-4 py-2" onClick={() => refresh()}>
        Refresh token
      </button>
      <h3 className="text-2xl">Dashboard</h3>
      {user && (
        <div>
          <h2 className="text-2xl">{user.name}</h2>
          <h2 className="text-2xl">{user.email}</h2>
        </div>
      )}
      <Link className="underline text-blue-500" to="/">
        Home
      </Link>
    </div>
  );
}

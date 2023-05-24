import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

export default function Home() {
  const navigate = useNavigate();
  const logout = useLogout();
  const singout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div>
      <h2 className="text-2xl">Home</h2>
      <Link className="underline text-blue-500" to="/dashboard">
        Dashboard
      </Link>
      <br />
      <button className="px-4 px-2  bg-blue-400" onClick={singout}>
        Logout
      </button>
    </div>
  );
}

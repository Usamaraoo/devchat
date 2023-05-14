import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { setAuth } = useAuth();
  return (
    <div>
      <h2 className="text-2xl">Home</h2>
      <Link className="underline text-blue-500" to="/dashboard">
        Dashboard
      </Link>
      <br />
      <button className="px-4 px-2  bg-blue-400" onClick={() => setAuth({})}>Logout</button>
    </div>
  );
}

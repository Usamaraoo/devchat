import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl">Home</h2>
      <Link className="underline text-blue-500" to="/dashboard">
        Dashboard
      </Link>
      <br />
   
    </div>
  );
}

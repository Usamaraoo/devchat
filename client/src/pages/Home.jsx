import { Link, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full my-6">
      <PostCard  />
    </div>
  );
}

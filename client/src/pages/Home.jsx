import { Link, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full ">
      <CreatePost/>
      <PostCard  />
    </div>
  );
}

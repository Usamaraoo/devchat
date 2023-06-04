import { Link, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full ">
      <div className="px-8">
        <CreatePost />
      </div>
      {/* posts timeline */}
      <div className=" mx-8 m-auto">
        <PostCard />
      </div>
    </div>
  );
}

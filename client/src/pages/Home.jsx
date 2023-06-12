import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { defaultDevImg } from "../data/defaultData";
export default function Home() {
  const axiosPrivate = useAxiosPrivate();
  const {
    auth: { userData },
  } = useAuth();
  const [devPosts, setDevPosts] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUserPosts = async () => {
      try {
        const res = await axiosPrivate.get("/api/dev-posts", {
          signal: controller.signal,
        });
        if (res.status === 200) {
          const posts = await res.data;
          isMounted && setDevPosts(posts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserPosts();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <div className="w-full ">
      <div className="px-8">
        <CreatePost />
      </div>
      {/* posts timeline */}
      <div className=" mx-8 m-auto">
        {devPosts &&
          devPosts.map((post) => {
            const { _id, body ,createdAt} = post;
            return (
              <div key={_id} className="my-6 px-6">
                <PostCard
                  postId={_id}
                  userName={userData?.name}
                  body={body}
                  userImg={defaultDevImg}
                  time={createdAt}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

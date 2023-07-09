import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const axiosPrivate = useAxiosPrivate();
  const {
    auth: { userData },
  } = useAuth();
  const [alldevPosts, setAllDevPosts] = useState(null);
  const [currentPost, setCurrentPost] = useState(null);
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
          isMounted && setAllDevPosts(posts);
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
        <CreatePost setCurrentPost={setCurrentPost} />
      </div>
      {/* posts timeline */}
      <div className=" mx-8 m-auto">
        {currentPost && (
          <div className="my-6 px-6">
            <PostCard
              postId={"new-post-need-slug"}
              userName={userData?.name}
              body={currentPost}
              userImg={userData?.avatarUrl}
              time={new Date()}
            />
          </div>
        )}
        {alldevPosts &&
          alldevPosts.map((post) => {
            const {
              _id,
              body,
              createdAt,
              devId: { avatarUrl, name },
            } = post;
            return (
              <div key={_id} className="my-6 px-6">
                <PostCard
                  postId={_id}
                  userName={name}
                  body={body}
                  userImg={avatarUrl}
                  time={createdAt}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

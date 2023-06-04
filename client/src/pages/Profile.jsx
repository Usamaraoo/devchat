import React from "react";
import useAuth from "../hooks/useAuth";
import { avatars } from "../data/Avatars";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import PostCard from "../components/PostCard";
import { defaultDevImg } from "../data/defaultData";
export default function Profile() {
  const {
    auth: { userData },
  } = useAuth();
  const axiosPrivate = useAxiosPrivate();

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
    <div className="w-full">
      {/* cover */}
      <div className="h-100 py-4  bg-slate-800 px-8 flex gap-5 cover-bg">
        <div>
          <img src={avatars[0]?.img} alt="user" className="w-64 rounded-full" />
        </div>
        <div className="mt-6">
          <p className="text-xl font-medium tracking-widest">
            {userData?.name}
          </p>
          <p className="text-sm text-gray-50 tracking-widest">
            MERN Stack Developer | React, Node.js, MongoDB, and Express |
            Building robust and scalable web applications to solve complex
            problems
          </p>
        </div>
      </div>
      {/* dev posts wall */}
      <div className="my-10">
        {devPosts &&
          devPosts.map((post) => {
            const { _id, body } = post;
            return (
              <div key={_id}  className="my-6 px-6">
                <PostCard
                  userName={userData?.name}
                  body={body}
                  userImg={defaultDevImg}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

import React from "react";
import { defaultDevImg } from "../data/defaultData";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FriendsDev() {
  const axiosPrivate = useAxiosPrivate();
  const [friendDevs, setFriendDevs] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getFirendsDev = async () => {
      try {
        const res = await axiosPrivate.get("/api/user/friends", {
          signal: controller.signal,
        });
        if (res.status === 200) {
          const posts = await res.data;
          isMounted && setFriendDevs(posts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFirendsDev();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  console.log("all devs", friendDevs);
  return (
    <div>
      {friendDevs &&
        friendDevs.map((dev, index) => {
          return (
            <div
              key={index}
              className="rounded-md bg-gray-700 my-2 w-full py-2 px-8 items-center "
            >
              <div className="flex justify-between items-center">
                <Link className="flex">
                  <img
                    className="rounded-full w-8  "
                    src={dev.avatarUrl}
                    alt={dev.name}
                  />
                  <p className="font-medium ml-2 self-center tracking-widest">
                    {dev.name}
                  </p>
                </Link>
                <Link to='/chat' title="Start a chat">
                  <BsFillChatDotsFill className="w-5 text-orange-300" />
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

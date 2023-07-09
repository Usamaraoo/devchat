import React from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import useConv from "../../hooks/useConv";
import { Link } from "react-router-dom";
import { orange,gray400 } from "../../data/StyleGuide";

export default function UserChatList() {
  const { convListState, setConvListState,setCurrentConv } = useConv();
  const axiosPrivate = useAxiosPrivate();
  let currentUser = window.location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    // here we are only getting the user data which user have conservation
    const getConversationsList = async () => {
      try {
        const res = await axiosPrivate.get("/api/conversation", {
          signal: controller.signal,
        });
        if (res.status === 200) {
          const conv = await res.data;
          isMounted && setConvListState(conv);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getConversationsList();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h2 className="text-2xl mb-2">Chat</h2>
      <hr />
      {/* list */}
      <div className="">
        {convListState.length > 0 &&
          convListState.map((singleConv) => {
            return (
              <div
                key={singleConv._id}
                className={`${
                  currentUser === singleConv.members[0].name
                    ? `border-2 border${orange} bg${gray400} font-extrabold`
                    : "bg-gray-700"
                } rounded-md  my-2 w-full py-2 px-8 items-center `}
              >
                <Link to={`chat/${singleConv.members[0].name}`} onClick={()=>setCurrentConv(singleConv)}>
                  <div className="flex justify-between">
                    <p className="font-medium self-center tracking-widest">
                      {singleConv.members[0].name}
                    </p>
                    <img
                      className={`${
                        currentUser === singleConv.members[0].name &&
                        " border-orange-400 border-2"
                      } rounded-full w-10 `}
                      src={singleConv.members[0].avatarUrl}
                      alt="user"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

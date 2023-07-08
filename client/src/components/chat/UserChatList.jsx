import React from "react";
import { defaultDevImg } from "../../data/defaultData";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

export default function UserChatList() {
  const axiosPrivate = useAxiosPrivate();
  const [convListState, setConvListState] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    // here we are only getting the user data which user have conservation
    const getConversationsList = async () => {
      try {
        const res = await axiosPrivate.get("/api/conversation", {
          signal: controller.signal,
        });
        console.log('convo list',res.data)
        if (res.status === 200) {
          const posts = await res.data;
          isMounted && setConvListState(posts);
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
        {convListState && convListState.map((singleConv)=>{
          return(
          <div key={singleConv._id} className="rounded-md bg-gray-700 my-2 w-full py-2 px-8 items-center ">
          <div className="flex justify-between">
            <p className="font-medium self-center tracking-widest">
            {singleConv.members[0].name}
            </p>
            <img
              className="rounded-full w-10 "
              src={singleConv.members[0].avatarUrl}
              alt="user"
            />
          </div>
        </div>
          )
        })}
        
        {/* <div className="rounded-md bg-gray-700 my-2 w-full py-2 px-8 items-center ">
          <div className="flex justify-between">
            <p className="font-medium self-center tracking-widest">
              {"UserName"}
            </p>
            <img
              className="rounded-full w-10 "
              src={defaultDevImg}
              alt="user"
            />
          </div>
        </div>
        <div className="rounded-md bg-gray-700 my-2 w-full py-2 px-8 items-center ">
          <div className="flex justify-between">
            <p className="font-medium self-center tracking-widest">
              {"UserName"}
            </p>
            <img
              className="rounded-full w-10 "
              src={defaultDevImg}
              alt="user"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

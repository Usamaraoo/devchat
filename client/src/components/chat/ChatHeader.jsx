import React from "react";

export default function ChatHeader({username, avatar}) {
  return (
    <div className="rounded-md bg-gray-700 my-2 w-full py-4 px-8 items-center ">
      <div className="flex justify-start items-start gap-3">
        <img className=" border-orange-400 border-2 rounded-full w-10 " src={avatar} alt="user" />
        <p className="font-bold text-xl self-center tracking-widest">{username}</p>
      </div>
    </div>
  );
}

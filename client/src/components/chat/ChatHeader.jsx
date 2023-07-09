import React from "react";

export default function ChatHeader({username, avatar}) {
  return (
    <div className="fixed w-2/4 rounded-md cover-bg bg-gray-700 my-2 top-2 py-4 px-8 items-center ">
      <div className="flex justify-start items-start gap-3">
        <img className=" border-orange-400 border-2 rounded-full w-10 " src={avatar} alt="user" />
        <p className="font-bold text-xl self-center tracking-widest">{username}</p>
      </div>
    </div>
  );
}

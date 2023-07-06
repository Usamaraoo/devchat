import React from "react";
import { defaultDevImg } from "../../data/defaultData";

export default function ChatHeader() {
  return (
    <div className="rounded-md bg-gray-700 my-2 w-full py-4 px-8 items-center ">
      <div className="flex justify-start items-start gap-3">
        <img className="rounded-full w-10 " src={defaultDevImg} alt="user" />
        <p className="font-bold text-xl self-center tracking-widest">{"UserName"}</p>
      </div>
    </div>
  );
}

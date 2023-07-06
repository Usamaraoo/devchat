import React from "react";
import { orange } from "../../data/StyleGuide";

export default function MessageForm() {
  return (
    <form action="" className="absolute bottom-4  w-2/4 left-50 ">
      <div className="relative">
        <input
          placeholder="write your message"
          type="text"
          className="w-full bg-gray-800 rounded-md pl-2 pr-29 py-3"
        />
        <button
          className={`bg${orange} right-2 top-2 absolute px-4 py-1 rounded-lg font-medium tracking-wider `}
        >
          Send
        </button>
      </div>
    </form>
  );
}

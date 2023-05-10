import React from "react";

export default function LoginRegsterSide({ imgSpc }) {
  return (
    <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-gray-600 to-gray-900 i justify-around items-center hidden">
      <div>
        <div className=" text-center absolute left-1/2 transform -translate-x-1/2 top-[200px] ">
          <h1 class=" font-bold text-4xl  font-sans text-orange-400">
            DevChat
          </h1>
          <p class=" mt-1 tracking-widest">Connect, Collaborate, Code</p>
          <img
            className="  opacity-60"
            width={300}
            src={imgSpc}
            alt="register"
          />
        </div>
      </div>
      <div className="opacity-50">
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-25 border-t-8"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
    </div>
  );
}

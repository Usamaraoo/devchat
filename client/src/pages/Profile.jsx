import React from "react";
import useAuth from "../hooks/useAuth";
import { avatars } from "../data/Avatars";
export default function Profile() {
  const {
    auth: { userData },
  } = useAuth();
// const{auth} = useAuth();

  console.log(useAuth())
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
    </div>
  );
}

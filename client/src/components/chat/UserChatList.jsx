import React from "react";
import { defaultDevImg } from "../../data/defaultData";

export default function UserChatList() {
  return (
    <div>
      <h2 className="text-2xl mb-2">Chat</h2>
      <hr />
      {/* list */}
      <div className="">
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
        </div>
      </div>
    </div>
  );
}

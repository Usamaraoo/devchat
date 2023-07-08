import React from "react";
import { orange } from "../data/StyleGuide";
import MessageForm from "../components/chat/MessageForm";
import ChatHeader from "../components/chat/ChatHeader";
import ChatSingleMessage from "../components/chat/ChatSingleMessage";
import useAuth from "../hooks/useAuth";
import { defaultDevImg } from "../data/defaultData";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useParams } from 'react-router-dom'
import useConv from "../hooks/useConv";

export default function ChatPage() {
  const { username } = useParams()
  const {
    auth: { userData },
  } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    // here we create or get current conversation and its messages
    const startConversation = async () => {
      try {
        // will create a new conversation if exit get it without creating
        const res = await axiosPrivate.post("/api/conversation",{receiver:username}, {
          signal: controller.signal,
        });
        if (res.status === 200) {
          const convo = await res.data;
          // setConvListState([...convListState,convo])
          // isMounted && setConvListState(convo);
        }
      } catch (error) {
        console.log(error);
      }
    };
    startConversation();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <div className=" w-full">
      <ChatHeader username={username} />
      {/* messages */}
      <div>
        <ChatSingleMessage
          img={true ? userData.avatarUrl : defaultDevImg}
          time={`2:30pm`}
          content={"Hy This is test message"}
          current={true}
        />
        <ChatSingleMessage
          img={false ? userData.avatarUrl : defaultDevImg}
          time={`2:30pm`}
          content={"Hy how are you"}
          current={false}
        />
        <ChatSingleMessage
          img={true ? userData.avatarUrl : defaultDevImg}
          time={`4:00pm`}
          content={"Did you finish the project already"}
          current={true}
        />
        <ChatSingleMessage
          img={false ? userData.avatarUrl : defaultDevImg}
          time={`2:30pm`}
          content={`numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut moles`}
          current={false}
        />
        <ChatSingleMessage
          img={true ? userData.avatarUrl : defaultDevImg}
          time={`2:30pm`}
          content={"Hy how are you"}
          current={true}
        />
        <ChatSingleMessage
          img={true ? userData.avatarUrl : defaultDevImg}
          time={`2:30pm`}
          content={`numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut moles`}
          current={true}
        />
      </div>
      <MessageForm />
    </div>
  );
}

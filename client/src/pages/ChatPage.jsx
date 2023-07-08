import React from "react";
import { orange } from "../data/StyleGuide";
import MessageForm from "../components/chat/MessageForm";
import ChatHeader from "../components/chat/ChatHeader";
import ChatSingleMessage from "../components/chat/ChatSingleMessage";
import useAuth from "../hooks/useAuth";
import { defaultDevImg } from "../data/defaultData";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import useConv from "../hooks/useConv";

export default function ChatPage() {
  const { currentConv, setCurrentConv } = useConv();
  const { username } = useParams();
  const {
    auth: { userData },
  } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [messages, setMessages] = useState(null)
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    // here we create or get current conversation and its messages
    const startConversation = async () => {
      try {
        // will create a new conversation if exit get it without creating
        const res = await axiosPrivate.post(
          "/api/conversation",
          { receiver: username },
          {
            signal: controller.signal,
          }
        );
        if (res.status === 200) {
          const convo = await res.data;
          setCurrentConv(convo);
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
  useEffect(() => {
    const getConversationMessage = async () => {
      try {
        const res = await axiosPrivate.get("/api/message/" + currentConv._id);
        setMessages(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    currentConv && getConversationMessage();
  }, [currentConv]);
  return (
    <div className=" w-full">
      {currentConv && (
        <ChatHeader
          username={currentConv.members[0].name}
          avatar={currentConv.members[0].avatarUrl}
        />
      )}
      {/* messages */}
      <div>
        {messages ? messages.map((msg)=>{
          const {_id,sender:senderID,text} = msg
          return(<div key={_id}>
             <ChatSingleMessage
          img={true ? currentConv.members[0].avatarUrl : defaultDevImg}
          time={`2:30pm`}
          content={text}
          current={true}
        />
          </div>)
        }):'Loading....'}
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
      </div>
      <MessageForm />
    </div>
  );
}

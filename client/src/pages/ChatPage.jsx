import React from "react";
import MessageForm from "../components/chat/MessageForm";
import ChatHeader from "../components/chat/ChatHeader";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import useConv from "../hooks/useConv";
import MessageList from "../components/chat/MessageList";
export default function ChatPage() {
  const { currentConv, setCurrentConv } = useConv();
  const { username } = useParams();
 
  const axiosPrivate = useAxiosPrivate();
  const [messages, setMessages] = useState(null);

  const updateMessageList = (msgContent) => {
    setMessages([...messages, msgContent]);
  };
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    // here we create or get current conversation
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
    // getting messages for current conversation
    const getConversationMessage = async () => {
      try {
        const res = await axiosPrivate.get("/api/message/" + currentConv._id);
        setMessages(res.data);
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
      <MessageList messages={messages} />
      <MessageForm updateMessageList={updateMessageList} />
    </div>
  );
}

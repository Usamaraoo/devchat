import { createContext, useEffect, useState } from "react";

const ConversationContext = createContext({});

export const ConversationProiver = ({ children }) => {
  const [convListState, setConvListState] = useState([]);
  // useEffect(()=>{
  //   console.log('from provider',convListState);
  // },[convListState])
  //on starting chat with any user this func will check it conv btw both user already
  //exist if not then add to list otherwise ignore
  // const checkAndUpdate = (user) => {
  //   console.log('user',user)
  //   let conv = convListState.filter((convUser)=> convUser.name === user.name)
  //   console.log('filter conv',conv);
  //   console.log('convo list',conv);
  // };
  return (
    <ConversationContext.Provider value={{ convListState, setConvListState }}>
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationContext;

import React from "react";
import RightSide from "./RightSide/MainComponent";
import LeftSide from "./LeftSide/MainComponent";
import ChatAppProvider from "../../context/ChatAppContext";

const ChatApp = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <ChatAppProvider>
        <LeftSide />
        <RightSide />
      </ChatAppProvider>
    </div>
  );
};

export default ChatApp;

import React from "react";
import { useChatAppContext } from "../../../context/ChatAppContext";
import Connect from "./Connect";
import ChannelChat from "./ChannelChat";

const MainComponent = () => {
  const { currentChannel, showConnect, showChannelChat } = useChatAppContext();
  return (
    <div className="flex flex-col w-3/4 overflow-hidden h-full ">
      <div className=" h-20 text-4xl flex items-center justify-center border-b border-b-white text-white">
        <p>
          {showConnect
            ? "Connect"
            : currentChannel.channelName
            ? currentChannel.channelName + "\t#" + currentChannel.channelJoinId
            : "Chat"}
        </p>
      </div>
      <div className="h-screen">
        {showConnect && (
          <div className="flex flex-col justify-center items-center h-full">
            <Connect />
          </div>
        )}
        {showChannelChat && (
          <div className="flex flex-col justify-center items-center h-full">
            <ChannelChat />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainComponent;

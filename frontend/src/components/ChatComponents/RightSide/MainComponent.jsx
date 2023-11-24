import React from "react";
import { useChatAppContext } from "../../../context/ChatAppContext";
import Connect from "./Connect";
import ChannelChat from "./ChannelChat";

const MainComponent = () => {
  const { currentChannel, showConnect, showChannelChat } = useChatAppContext();
  return (
    <div className="flex flex-col w-3/4 overflow-hidden h-full ">
      <div className="text-center p-4 border-b border-b-white text-white">
        <p className="text-4xl">
          {showConnect
            ? "Connect"
            : currentChannel.channelName
            ? currentChannel.channelName + "\t#" + currentChannel.channelJoinId
            : "Channel"}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        {showConnect && <Connect />}
        {showChannelChat && <ChannelChat />}
      </div>
    </div>
  );
};

export default MainComponent;

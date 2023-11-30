import api from "../../../utils/api";
import Message from "./Message";
import { useEffect, useState } from "react";
import { useChatAppContext } from "../../../context/ChatAppContext";
import { IoIosSend } from "react-icons/io";

const ChannelChat = () => {
  const [messages, setMessages] = useState([]);
  const { currentChannel, setCurrentChannel, showChannels } =
    useChatAppContext();
  const getData = async () => {
    const response = await api.getMessages(currentChannel.channelId);
    setMessages(response.messages);
  };

  useEffect(() => {
    getData();
  }, [currentChannel]);
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] w-full">
      <div
        className={
          " flex flex-col justify-center w-full text-lg text-white  overflow-y-scroll pt-32 pl-6 pr-6 scrollbar-hide " +
          (showChannels === false ? "hidden" : "block")
        }
      >
        {messages.map((message) => {
          return <Message message={message} />;
        })}
      </div>
      <div className=" flex flex-row w-full sticky items-end bg-[#252526] p-4 gap-2 ">
        <input
          type="text"
          className=" bg-gray-600 placeholder:text-xl w-5/6 text-white p-2 focus:outline-purple-900 outline-none shadow-gray-500 shadow-inner focus:outline-4 rounded-lg"
          placeholder="Message"
        />
        <button>
          <IoIosSend color="gray-600" size={40}/>
        </button>
      </div>
    </div>
  );
};

export default ChannelChat;

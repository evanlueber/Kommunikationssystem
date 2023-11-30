import api from "../../../utils/api";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import { useChatAppContext } from "../../../context/ChatAppContext";
import { IoIosSend } from "react-icons/io";
import { useUserContext } from "../../../context/UserContext";
import socketIOClient from "socket.io-client";

const ChannelChat = () => {
  const socket = socketIOClient("http://localhost:5003");
  const messageContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const { currentChannel, showChannels } = useChatAppContext();
  const { user } = useUserContext();
  const getData = async () => {
    const response = await api.getMessages(currentChannel.channelId);
    setMessages(response.messages);
  };

  useEffect(() => {
    getData();
  }, [currentChannel]);

  const sendMessage = async () => {
    const response = await api.sendMessage(
      user.userId,
      messageInput,
      currentChannel.channelId
    );
    if (response.success) {
      socket.emit("chat message", messageInput)
      setMessageInput("");
      getData();
    }
  };
  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight + 100;
    }
  };

  socket.on('chat message', (message) => {
    getData();
    // Add logic to update messages state or perform other actions
  });
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] w-full">
      <div
        ref={messageContainerRef}
        className={
          " flex flex-col justify-center w-full text-lg text-white flex-grow  overflow-y-scroll pt-32 pl-6 pr-6 scrollbar-hide " +
          (showChannels === false ? "hidden" : "block")
        }
      >
        {messages.map((message) => {
          return <Message message={message} />;
        })}
      </div>
      <div className=" flex flex-row items-end bg-[#252526] p-4 gap-2 ">
        <input
          type="text"
          className=" bg-[#252526] placeholder:text-xl w-5/6 flex-grow text-white p-2 focus:outline-purple-500 outline-none outline-white focus:outline-3 rounded-lg"
          placeholder="Message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button
          className="text-white hover:text-purple-500"
          onClick={sendMessage}
        >
          <IoIosSend color="gray-600" size={40} />
        </button>
      </div>
    </div>
  );
};

export default ChannelChat;

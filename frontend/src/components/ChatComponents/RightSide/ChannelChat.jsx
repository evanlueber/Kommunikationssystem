import api from "../../../utils/api";
import Message from "./Message";
import { useEffect, useState } from "react";
import { useChatAppContext } from "../../../context/ChatAppContext";

const ChannelChat = () => {
    const [messages, setMessages] = useState([])
    const {currentChannel, setCurrentChannel, showChannels} = useChatAppContext()
    const getData = async () => {
        const response = await api.getMessages(currentChannel.channelId)
        setMessages(response.messages)
    }

    useEffect(() => {
        getData()
    }, [currentChannel])
  return (
    <div className={' flex flex-col justify-center w-full text-lg text-white h-[calc(100vh-5rem)] overflow-y-scroll pt-56 ' + (showChannels === false ? "hidden" : "block")}>
        {messages.map((message) => {
            return <Message message={message} />
        })}
    </div>
  )
}

export default ChannelChat
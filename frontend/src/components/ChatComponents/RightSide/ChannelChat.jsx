import api from "../../../utils/api";
import Message from "./Message";
import { useEffect, useState } from "react";
import { useChatAppContext } from "../../../context/ChatAppContext";

const ChannelChat = () => {
    const [messages, setMessages] = useState([])
    const {currentChannel, showChannels} = useChatAppContext()
    const getData = async () => {
        const response = await api.getMessages(currentChannel.channelId)
        setMessages(response.messages)
    }

    useEffect(() => {
        getData()
    }, [])
  return (
    <div className={' flex flex-col justify-center w-full text-lg text-white overflow-y-scroll h-5/6 ' + (showChannels === false ? "hidden" : "block")}>
        {messages.map((message) => {
            return <Message message={message} />
        })}
    </div>
  )
}

export default ChannelChat
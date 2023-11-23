import React from 'react'
import api from "../../../utils/api";
import Message from "./Message";
import { useEffect, useState } from "react";

const ChannelChat = () => {
    const [messages, setMessages] = useState([])
    const getData = async () => {
        const response = await api.getMessages()
        setMessages(response.messages)
    }

    useEffect(() => {
        getData()
    }, [])
  return (
    <div className=' text-l items-start text-white'>
        {messages.map((message) => {
            return <Message message={message} />
        })}
    </div>
  )
}

export default ChannelChat
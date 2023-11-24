import React from 'react'
import { useUserContext } from '../../../context/UserContext'

const Message = ({message}) => {
  const {user} = useUserContext()

  const side = message.userId === user.userId ? "right" : "left"
  return (
    <div className={'w-full flex flex-col ' + (side === "right" ? "items-end": "items-start" )}>
      <div className={" flex flex-col justify-between gap-5 rounded p-2 " + (side === "right" ? " bg-green-500 ": "bg-gray-500" )}>
        <p className="text-2xl font-bold">{message.username}</p>
        <p className="text-xl">{message.content}</p>
        <p className="text-lg">{message.sentAt}</p>
      </div>
    </div>
  )
}

export default Message
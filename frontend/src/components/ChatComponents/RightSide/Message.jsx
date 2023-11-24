import React from 'react'
import { useUserContext } from '../../../context/UserContext'

const Message = ({message}) => {
  const {user} = useUserContext()

  const side = message.userId === user.userId ? "right" : "left"
  const sentAt = new Date(message.sentAt)
  return (
    <div className={'w-full flex flex-col mb-6 ' + (side === "right" ? "items-end": "items-start" )}>
      <div className={" flex flex-col justify-between rounded p-2 " + (side === "right" ? " bg-green-500 ": "bg-purple-600" )}>
        <p className="text-2xl font-bold">{message.username}</p>
        <p className="text-xl">{message.content}</p>
        <p className="text-sm opacity-50 ">{sentAt.getHours() < 10 ? "0"+sentAt.getHours(): sentAt.getHours()}:{sentAt.getMinutes() < 10 ? "0"+sentAt.getMinutes(): sentAt.getMinutes()}</p>
      </div>
    </div>
  )
}

export default Message
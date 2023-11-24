import React from 'react'
import { useChatAppContext } from '../../../context/ChatAppContext'

const Message = ({message}) => {
    const {currentChannel} = useChatAppContext()

  return (
    <div>
        <p></p>
    </div>
  )
}

export default Message
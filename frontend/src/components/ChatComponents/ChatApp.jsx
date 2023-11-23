import React from 'react'
import RightSide from './RightSide/MainComponent'
import LeftSide from './LeftSide/MainComponent'

const ChatApp = ({ setLanding, setChatApp, username}) => {
  return (
    <div className='chat-app'>
      <LeftSide username={username}/>
      <RightSide />
    </div>
  )
}

export default ChatApp
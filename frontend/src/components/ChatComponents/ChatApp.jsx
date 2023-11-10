import React from 'react'
import RightSide from './RightSide/MainComponent'
import LeftSide from './LeftSide/MainComponent'

const ChatApp = ({ setLanding, setChatApp}) => {
  return (
    <div>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default ChatApp
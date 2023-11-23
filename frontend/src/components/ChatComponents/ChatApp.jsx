import React from 'react'
import RightSide from './RightSide/MainComponent'
import LeftSide from './LeftSide/MainComponent'

const ChatApp = ({ username }) => {
  return (
    <div className='flex flex-row w-screen h-screen'>
      <LeftSide username={username}/>
      <RightSide />
    </div>
  )
}

export default ChatApp
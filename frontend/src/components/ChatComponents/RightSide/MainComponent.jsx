import React from 'react'
import { useChatAppContext } from '../../../context/ChatAppContext'

const MainComponent = () => {
  const {currentChannel, showConnect} = useChatAppContext()
  return (
    <div>
      <p>rightside</p>
      <p className=' text-white'>{currentChannel.channelName}</p>
    </div>
  )
}

export default MainComponent
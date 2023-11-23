import React from 'react'
import { useChatAppContext } from '../../../context/ChatAppContext'
import Connect from './Connect'

const MainComponent = () => {
  const {currentChannel, showConnect} = useChatAppContext()
  return (
    <div className="flex flex-col w-3/4 ">
      <div className="text-center p-4 border-b border-b-white text-white">
        <p className="text-4xl">{showConnect ? "Connect": currentChannel.channelName ? currentChannel.channelName: "Channel"}</p>
      </div>
        <div className='flex flex-col justify-center items-center h-full'>
          {showConnect&& <Connect/>}
        </div>
    </div>
  )
}

export default MainComponent
import React from 'react'
import { useChatAppContext } from '../../../context/ChatAppContext'


const Channel = ({channel}) => {
  const {setCurrentChannel, currentChannel, setShowChannelChat} = useChatAppContext()

  return (
    <div className={'p-2 border-b border-b-white ' + (currentChannel.channelName === channel.channelName ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 text-lg ": "")}>
        <p className='flex flex-row ' onClick={() => {
          setCurrentChannel(channel)
          setShowChannelChat(true)
        }}>{channel.channelName} </p>
    </div>
  )
}

export default Channel
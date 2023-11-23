import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useChatAppContext } from '../../../context/ChatAppContext'

const Channel = ({channel}) => {
  const {setCurrentChannel} = useChatAppContext()

  return (
    <div className='p-2 border-b border-b-white'>
        <p className='flex flex-row' onClick={() => {
          setCurrentChannel(channel)
        }}>{channel.channelName} <IoIosArrowForward className='m-1'/> </p>
    </div>
  )
}

export default Channel
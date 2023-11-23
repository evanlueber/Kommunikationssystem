import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Channel = ({channel}) => {


  return (
    <div className='p-2 border-b border-b-white'>
        <p className='flex flex-row'>{channel.channelName} <IoIosArrowForward className='m-1'/> </p>
    </div>
  )
}

export default Channel
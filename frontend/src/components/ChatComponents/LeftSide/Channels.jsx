import React, { useEffect, useState } from 'react'
import Channel from './Channel'
import api from '../../../utils/api'

const Channels = () => {
    const [channels, setChannels] = useState([])
    const getData = async () => {
        const response = await api.getChannels()
        setChannels(response.channels)
    }

    useEffect(() => {
        getData()
    }, [])
  return (
    <div className='border border-b-white w-1/2 text-xl items.start'>
        {channels.map((channel) => {
            return <Channel channel={channel} />
        })}
    </div>
  )
}

export default Channels
import React from 'react'

const MainComponent = ({username}) => {

  return (
    <div className='flex flex-col w-1/4 h-screen text-white border-r-2 border-r-white'>
      <div className='h-full border-r-2 border-r-white'>
        <p>{username}</p>
      </div>
    </div>
  )
}

export default MainComponent
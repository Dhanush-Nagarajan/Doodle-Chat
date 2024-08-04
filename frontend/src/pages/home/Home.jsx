// eslint-disable-next-line no-unused-vars
import React from 'react'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding'>
      <Sidebar/> 
      <MessageContainer/>     
    </div>
  )
}

export default Home

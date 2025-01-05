import React from 'react'
import video from '../assets/rotateplanet.mp4'

const Video = () => {
  return (
    <div className='flex justify-end  overflow-hidden p-8 items-center h-screen'>
        <video src={video} autoPlay={true} loop={true} muted={true} className='w-[300px] rounded-3xl h-[300px] object-cover'></video>
    </div>
  )
}

export default Video
import React, { useState } from 'react'

const Live = () => {
 
  const links = [
    "https://www.youtube.com/embed/X7QRKdw-sTQ?autoplay=1",
    "https://www.youtube.com/embed/eYPaIoocfnE?autoplay=1",
    "https://www.youtube.com/embed/nv1MQ_en2rQ?autoplay=1",
    "https://www.youtube.com/embed/cmK3FUFgIfk?autoplay=1"
  ]
  const [currentAngle, setCurrentAngle] = useState(0);
  return (
    <>
      <h1 className='text-white text-center  text-2xl my-10'>Live Match</h1>
      <div className='flex flex-col md:flex-row justify-center'>
        <iframe className='' width="885" height="498" src={links[currentAngle%4]} title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay>
        </iframe>
        <div className='self-end'>
          <button onClick={() => setCurrentAngle(currentAngle+1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold -ml-40 mb-5 py-2 px-4 rounded'>Change Angle</button>
          
        </div>

      </div>
    </>

  )
}

export default Live
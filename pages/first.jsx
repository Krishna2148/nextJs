import Image from 'next/image'
import React from 'react'

const first = () => {
  return (
    <>
      <div className="container position-relative p-5" style={{height:'500px'}}>

        <Image src="/image/hi.jpg"
          fill alt="image of beautiful place. !" />
      </div>
    </>
  )
}

export default first
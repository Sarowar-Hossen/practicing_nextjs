
import Button from '@/app/Components/Button'
import Image from 'next/image'
import React from 'react'
import ImageOptimisation from "@/public/Images/17.png"

const Mission = () => {
  return (
    <div>
      <h2>This is a mission page</h2>
      <div>
      <Image placeholder='blur' src={ImageOptimisation} quality={100} />
      </div>
      <p>lorem asdflkjads asd fsadf asdf asdkfjaslkf asd asdl jkjhdshuwer d lkjhajfsdaoi</p>
     <Button/>
    </div>
  )
}

export default Mission

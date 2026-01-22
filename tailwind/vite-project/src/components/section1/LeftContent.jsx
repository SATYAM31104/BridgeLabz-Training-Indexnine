import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-[78vh] w-1/3 flex flex-col justify-between px- -m-8'>
        <HeroText></HeroText>
       <Arrow></Arrow>
    </div>
  )
}

export default LeftContent
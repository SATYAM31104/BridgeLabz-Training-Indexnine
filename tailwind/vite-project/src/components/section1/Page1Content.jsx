import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
<div className='py-10 px-20 h-full flex justify-between gap-4'>
        <LeftContent></LeftContent>
        <RightContent users={props.users}></RightContent>
    </div>
  )
}

export default Page1Content
import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-[78vh] w-2/3 p-6 overflow-x-auto overflow-y-hidden scrollbar-hide'>
        <RightCard users={props.users} />
    </div>
  )
}

export default RightContent

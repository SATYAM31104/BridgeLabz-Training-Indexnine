import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = ({ users }) => {
  console.log('RightCard received users:', users)
  
  if (!users || users.length === 0) {
    return <div className='text-white text-2xl'>No users found</div>
  }

  return (
   <div className='flex h-full w-full gap-7 flex-nowrap'>
    {users.map((user, index) => (
      <RightCardContent 
        key={index}
        img={user.img}
        intro={user.intro}
        tag={user.tag}
        index={index}
        gender={user.gender}
      />
    ))}
   </div>
  )
}

export default RightCard

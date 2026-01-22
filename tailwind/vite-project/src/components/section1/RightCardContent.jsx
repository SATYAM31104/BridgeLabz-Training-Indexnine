import React from 'react'

const RightCardContent = ({ img, intro, tag, index, gender }) => {
  return (
     <div className='h-full w-80 rounded-4xl overflow-hidden relative flex shrink-0'>

      {/* Background image */}
      <img
        className='h-full w-full object-cover'
        src={img}
        alt=""
      />

      {/* Dark gradient overlay */}
      <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10' />

      {/* Content */}
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between text-white'>
        <h2 className='bg-white/20 backdrop-blur-sm h-10 w-10 flex items-center justify-center rounded-full text-2xl font-bold'>
          {index + 1}
        </h2>

        <div>
          <p className='text-lg leading-relaxed mb-10'>
            {intro} 
          </p>

          <div className='flex justify-between items-center'>
            <button className='bg-orange-500 rounded-full font-extrabold px-3 py-1 mt-5 text-lg'>
              {tag}
            </button>

            <button className='bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mt-5 text-lg'>
              ➡️ {gender}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RightCardContent

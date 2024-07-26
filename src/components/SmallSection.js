import React from 'react'

export default function SmallSection({image,number,p}) {
  return (
    <div className='bg-white w-[170px] h-[100px] p-2 flex flex-row justify-between gap-2 rounded-lg hover:text-white items-center text-xs font-bold hover:bg-blue-700 hover:-translate-y-4 transition-all duration-500'>
        <div>
            {image}
        </div>
        {/*  */}
        <div className='flex flex-col justify-between'>
            <p>{number}</p>
            <p>{p} </p>
        </div>
      
    </div>
  )
}

import React from 'react'

export default function Robo({msg}:any) {
  return (
    <div className='w-[9 0%] flex flex-row justify-start'>
        <p className='bg-[#eee] text-black secondaryFont max-w-[60%] p-4 my-4'>{msg}</p>
    </div>
  )
}

import React from 'react'

export default function User({msg}:any) {
  return (
    <div className='w-[9 0%] flex flex-row justify-end'>
        <p className='blueGrad tertiaryFont max-w-[60%] p-4 my-4 text-white'>{msg}</p>
    </div>
  )
}

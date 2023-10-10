import React from 'react'

export default function History() {
  return (
    <div className="px-2 py-2 pb-4 my-2 w-full flex flex-col blueGradBorder secondaryFont border-b-[1px] text-md cursor-pointer font-light opacity-75 transition-all hover:opacity-100 hover:bg-[#1b2c4b] hover:border-0 hover:pb-2">
        <p className='truncate secondaryFont opacity-75 text-white'> <i className="fa-solid fa-comments mr-1"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        <div className="flex justify-between mt-2">
            <div className='text-[0.5rem] text-white'><i className="fa-solid fa-calendar-days mr-1"></i>12-02-23</div>
            <div className='text-[0.5rem] text-white'><i className="fa-solid fa-clock mr-1"></i>12:12</div>
        </div>
    </div>
  )
}

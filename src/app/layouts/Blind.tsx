import React from 'react'

export default function Blind() {
    return (
        <>
            <main className="grid place-items-center min-h-screen">
                <div className="bg3"></div>
                <div className="flex bg-white z-20 w-full h-full md:h-auto md:w-[800px]">
                    <div className="flex flex-col items-center justify-center md:justify-start w-1/2 md:px-6 py-12 border-r-4 border-[#8b8b8b66] transition-all hover:bg-blue-500 group cursor-pointer h-full md:h-[270px]">
                        <i className="blueGradText text-3xl mb-8 md:text-5xl lg:text-7xl md:leading-[4rem] transition-all group-hover:hidden fa-solid fa-square-check"></i>
                        <p className="text-center blueGradText primaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem] transition-all group-hover:hidden">I am Blind</p>
                        <i className="hidden opacity-0 group-hover:opacity-100 text-white text-3xl mb-8 md:text-5xl lg:text-7xl md:leading-[4rem] transition-all group-hover:block fa-solid fa-square-check"></i>
                        <p className="text-center hidden primaryFont text-white text-3xl md:text-5xl lg:text-7xl md:leading-[4rem] transition-all group-hover:block">I am Blind</p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:justify-start w-1/2 md:px-6 py-12 transition-all hover:bg-blue-500 group cursor-pointer h-full md:h-[270px]">
                        <i className="blueGradText text-3xl mb-8 md:text-5xl lg:text-7xl md:leading-[4rem] transition-all group-hover:hidden fa-solid fa-square-xmark"></i>
                        <p className="text-center blueGradText primaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem] transition-all group-hover:hidden">I ain't Blind</p>
                        <i className="hidden opacity-0 group-hover:opacity-100 text-white text-3xl mb-8 md:text-5xl lg:text-7xl md:leading-[4rem] transition-all group-hover:block fa-solid fa-square-xmark"></i>
                        <p className="text-center hidden primaryFont text-white text-3xl md:text-5xl lg:text-7xl md:leading-[4rem] transition-all group-hover:block">I ain't Blind</p>
                    </div>
                </div>
            </main>
        </>
    )
}

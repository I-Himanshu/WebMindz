import React from 'react'
import Link from "next/link";
export default function BlindOptions() {
    return (
        <>
            <main className="grid place-items-center min-h-screen md:p-40">
                <div className="bg4"></div>
                <div className="z-20 grid grid-cols-2 gap-3 md:gap-5 w-full h-full max-w-[750px]">
                <Link href={"/chat/doctor/new"} className="flex flex-col items-center justify-center rounded-lg w-full shadow-md text-center blueGrad2 group text-black">
                        <i className="fa-solid fa-message text-[35px] md:text-[50px] mb-2 text-black transition-all group-hover:text-white" />
                        <b className="primaryFont transition-all group-hover:text-white text-[35px] md:text-[50px]">Chat</b>
                    </Link>
                    <div onClick={()=>{
                         if(typeof window !== "undefined"){window.location.href = "/news";}}} className="flex flex-col items-center justify-center rounded-lg w-full shadow-md text-center blueGrad2 group text-black">
                        <i className="fa-solid fa-newspaper text-[35px] md:text-[50px] mb-2 text-black transition-all group-hover:text-white" />
                        <b className="primaryFont transition-all group-hover:text-white text-[35px] md:text-[50px]">News</b>
                    </div>
                    <div  onClick={()=>{ if(typeof window !== "undefined"){window.location.href = "/weather";}}}  className="flex flex-col items-center justify-center rounded-lg w-full shadow-md text-center blueGrad2 group text-black">
                        <i className="fa-solid fa-cloud text-[35px] md:text-[50px] mb-2 text-black transition-all group-hover:text-white" />
                        <b className="primaryFont transition-all group-hover:text-white text-[35px] md:text-[50px]">Weather</b>
                    </div>
                    <div onClick={()=>{ if(typeof window !== "undefined"){window.location.href = "/Options";}}} className="flex flex-col items-center justify-center rounded-lg w-full shadow-md text-center blueGrad2 group text-black">
                        <i className="fa-solid fa-robot text-[35px] md:text-[50px] mb-2 text-black transition-all group-hover:text-white" />
                        <b className="primaryFont transition-all group-hover:text-white text-[35px] md:text-[50px]">Others</b>
                    </div>
                </div>
            </main>
        </>
    )
}

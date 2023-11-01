"use client";
import React from 'react';
import { auth } from '@/firebase/config';
export default function ProfilePage() {
    const [user, setUser]: [any, any] = React.useState(null);

    React.useEffect(() => {
        auth.onAuthStateChanged((user: any) => {
            setUser(user);
        });
    }, []);


    return <>
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <div className="w-[300px] md:w-[700px] min-h-[250px] bg-[#67676734] flex flex-col md:flex-row relative shadow-lg pb-12">
                <div className="absolute top-[-20px] right-[10px] -skew-x-6 px-8 py-2 blueGrad">
                    <p>Profile</p>
                </div>
                <div className="w-full md:w-[40%] h-full">
                    <img className="w-full h-full" src={user?.photoURL} alt={user?.displayName} />
                </div>
                <div className="flex flex-col px-8 pt-5">
                    <div className="font-bold text-[45px] md:text-[100px] mb-2 primaryFont opacity-60 leading-[55px] md:leading-[110px]">{user?.displayName}</div>
                    <p className="text-sm md:text-xl md:mt-[-10px] mb-[30px] md:mb-0 font-thin opacity-30">
                        {user?.email}
                    </p>
                    <p className="absolute bottom-1 right-1 md:bottom-4 md:right-4 rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 specialFont blueGradText opacity-50">{user?.uid}</p>
                </div>
            </div>
        </div>
    </>
}
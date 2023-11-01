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
            <div className="w-[700px] h-[250px] bg-[#67676734] flex relative shadow-lg shadow-[#ffffff1d]">
                <div className="absolute top-[-20px] right-[10px] -skew-x-6 px-8 py-2 blueGrad">
                    <p>Profile</p>
                </div>
                <div className="w-[40%] h-full">
                    <img className="w-full h-full" src={user?.photoURL} alt={user?.displayName} />
                </div>
                <div className="relative flex flex-col px-8 pt-5">
                    <div className="font-bold text-[100px] mb-2 primaryFont opacity-60">{user?.displayName}</div>
                    <p className="text-xl mt-[-40px] font-thin opacity-30">
                        {user?.email}
                    </p>
                    <p className="absolute bottom-4 right-4 rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 specialFont blueGradText opacity-50">{user?.uid}</p>
                </div>
            </div>
        </div>
    </>
}
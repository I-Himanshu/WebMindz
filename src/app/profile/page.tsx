"use client";
import React from 'react';
import { auth } from '@/firebase/config';
export default function ProfilePage() {
    const [user, setUser]:[any,any] = React.useState(null);

    React.useEffect(() => {
        auth.onAuthStateChanged((user:any) => {
            setUser(user);
        });
    }, []);

    
    return <>
        <div>
            {/* Profile card with tailwind css */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={user?.photoURL} alt={user?.displayName} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{user?.displayName}</div>
                    <p className="text-gray-700 text-base">
                        {user?.email}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{user?.uid}</span>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
                </div>

        </div>    
    </>
}
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
            <h1>Profile</h1>
            <div>
                <p>Display Name: {user?.displayName}</p>
                <p>Email: {user?.email}</p>
                <p>Photo URL: {user?.photoURL}</p>
                <p>UID: {user?.uid}</p>
            </div>
        </div>    
    </>
}
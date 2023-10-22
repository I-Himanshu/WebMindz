"use client"
import React from 'react'
import {auth} from "../../firebase/config"
import { signOut } from 'firebase/auth';

export default function LogoutPage() {

    return (
        <div>
            <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
    )


}
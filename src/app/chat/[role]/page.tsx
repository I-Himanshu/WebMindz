"use client";
import React from 'react'
import Chat from '../../layouts/Chat'
import { ROLES } from '@/components/chat/roles';

export default function page({params:{role}}: {params:{role:any}}) {
    console.log("role", role);
    return (
        <Chat role={ROLES[role] ? role : "default"} />
    )

}

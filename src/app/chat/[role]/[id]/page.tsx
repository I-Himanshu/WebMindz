"use client";
import React from 'react'
import Chat from '../../../layouts/Chat'
import { ROLES } from '@/components/chat/roles';

export default function page({params:{role,id}}: {params:{role:any,id:any}}) {
    console.log("role", role,id);
    return (
        <Chat role={ROLES[role] ? role : "default"} ID={id} />
    )

}

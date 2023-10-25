"use client";
import React from 'react'
import Chat from '../../layouts/Chat'
import { ROLES } from '@/components/chat/roles';

export default function page() {
    return (
        <div>
            <Chat role={"doctor"} />
        </div>
    )

}

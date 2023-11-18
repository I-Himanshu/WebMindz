"use client"
import React from 'react'
import BlindOptions from '../layouts/BlindOptions'
import { speak } from '@/helpers/speak'

function ChatOptionsPage() {
  speak("Welcome to the options page. Please tap over top leftmost screen to chat, top rightmost screen to read news, bottom leftmost screen to check weather and bottom rightmost screen to check other options")
  return (
    <BlindOptions />
  )
}

export default ChatOptionsPage
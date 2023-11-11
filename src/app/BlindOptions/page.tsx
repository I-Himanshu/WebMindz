"use client"
import React from 'react'
import BlindOptions from '../layouts/BlindOptions'
import { speak } from '@/helpers/speak'

function ChatOptionsPage() {
  speak("Welcome to the chat options page. Please select your chat options.")
  return (
    <BlindOptions />
  )
}

export default ChatOptionsPage
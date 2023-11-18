"use client"
import React from 'react'
import Blind from '../layouts/Blind'
import {speak} from '../../helpers/speak'
function Blindd() {
    speak("Please tap leftmost screen if you are blind and rightmost screen if you are not");
  return (
    <Blind />
  )
}

export default Blindd
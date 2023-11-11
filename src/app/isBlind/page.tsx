"use client"
import React from 'react'
import Blind from '../layouts/Blind'
import {speak} from '../../helpers/speak'
function Blindd() {
    speak("Please select you are blind or not");
  return (
    <Blind />
  )
}

export default Blindd
"use client";
import { useState } from 'react';


  
export const toggleListening = (listening:any,setListening:any,transcript:any,setTranscript:any) => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 1;


      recognition.onstart = () => {
        console.log('Listening!');
        setListening(true);
      };

      recognition.onend = () => {
        console.log('Stopped listening.');
        setListening(false);
      };

      recognition.onresult = (event:any) => {
        const interimTranscript = Array.from(event.results)
          .map((result:any) => result[0].transcript)
          .join('');
        setTranscript(interimTranscript);
        console.log(interimTranscript);
      };

      if (listening) {
        recognition.stop();
      } else {
        recognition.start();
      }
    } else {
      alert("Speech recognition is not supported in your browser.");
    }
  };
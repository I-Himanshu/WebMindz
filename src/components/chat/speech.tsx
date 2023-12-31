"use client";
import { useState } from 'react';



export default function (setTranscript: any, setIsAutoEnd: any, pauseAudio: boolean = false) {
  // vibrate for 3s
  navigator.vibrate(3000);
  if(typeof window !== "undefined"){
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;

    recognition.start();
    if (pauseAudio) {
      recognition.stop();
      return;
    }
    recognition.onstart = () => {
      setIsAutoEnd(false);
      
      console.log('Listening!');
    };
    recognition.onspeechend = () => {
      recognition.stop();
      console.log("Speech recognition has stopped.");
    };
    recognition.onend = () => {
      console.log('Stopped listening.');
    };

    recognition.onresult = (event: any) => {
      const interimTranscript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join('');
      setTranscript(interimTranscript);
      console.log(interimTranscript);
    };


    recognition.onerror = (event: any) => {
      console.log('Error occurred in recognition: ' + event.error);
    }

    recognition.onaudiostart = (event: any) => {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
      setTimeout(() => {
        recognition.stop();
        setIsAutoEnd(true);
      }, 7000)
    }

    recognition.onaudioend = (event: any) => {
      //Fired when the user agent has finished capturing audio.
      setIsAutoEnd(true);
      console.log('SpeechRecognition.onaudioend');
    }

    recognition.onend = (event: any) => {
      //Fired when the speech recognition service has disconnected.
      setIsAutoEnd(true);
      console.log('SpeechRecognition.onend');
    }

    return recognition;


  } else {
    alert("Speech recognition is not supported in your browser.");
  }
}else {
    alert("wINDOW is not supported in your browser.");
  }
};
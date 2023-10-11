"use client";
import { useState } from "react";

export const toggleListening = (
  listening:any,
  setListening:any,
  transcript:any,
  setTranscript:any
) => {
    console.log("toggleListening");
  if (window.SpeechRecognition || window.webkitSpeechRecognition) {

    const recognition = new (window?.SpeechRecognition ||
      window?.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;
    console.log("recognition",recognition);

    recognition.onstart = () => {
        console.log("recognition.onstart");
      setListening(true);
    };

    recognition.onend = () => {
        console.log("recognition.onend");
      setListening(false);
    };

    recognition.onresult = (event) => {
      const interimTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
        console.log("interimTranscript",interimTranscript);
      setTranscript(interimTranscript);
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

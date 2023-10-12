"use client";
import { useState } from 'react';

const SpeechToText: React.FC = () => {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  interface Window {
    SpeechRecognition: any;
  }
  
  const toggleListening = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = (event) => {
        const interimTranscript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join('');
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

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Speech to Text</h1>
      <button
        className={`bg-${listening ? 'red' : 'green'}-600 text-white py-2 px-4 rounded`}
        onClick={toggleListening}
      >
        {listening ? 'Stop Listening' : 'Start Listening'}
      </button>
      {transcript && (
        <div>
          <p className="font-semibold">Transcript:</p>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default SpeechToText;

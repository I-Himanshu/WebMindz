import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Robo({ msg }:any) {
  const [text, setText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const typingInterval = 10; // Adjust the typing speed as needed

    if (currentIndex < msg.length) {
      const timer = setTimeout(() => {
        setText(msg.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingInterval);

      return () => clearTimeout(timer);
    }

    const scrollHere = document.getElementById('scrollHere');
    scrollHere?.scrollIntoView({ behavior: 'smooth' });
  })
  return (

    <div className='w-[90%] flex flex-row justify-start'>
        <p id="markdown-container" className='bg-[#eee] text-black secondaryFont max-w-[60%] p-4 my-4'>
          <ReactMarkdown>{text}</ReactMarkdown>
        </p>
    </div>
  )
}

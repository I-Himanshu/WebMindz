"use client";
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
export default function Robo({msg}:any) {
  msg = "  " + msg;
  const [text, setText] = React.useState("");
  
  useEffect(() => {
    var i = 0;
    var speed = 1;
    function typeWriter() {
      if (i < msg.length) {
        setText((prev) => prev + msg.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
      const scrollHere = document.getElementById("scrollHere");
      scrollHere?.scrollIntoView({ behavior: "smooth" });
    }
    typeWriter();
    return () => {};
  }, [msg]);

  return (

    <div className='w-[90%] flex flex-row justify-start'>
        <p id="markdown-container" className='bg-[#eee] text-black secondaryFont max-w-[60%] p-4 my-4'>
          <ReactMarkdown>{text}</ReactMarkdown>
        </p>
    </div>
  )
}

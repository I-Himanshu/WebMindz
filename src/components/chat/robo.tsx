import React, { useEffect } from 'react'

export default function Robo({msg}:any) {
  // i want to write text like a typewriter using useState
  const [text, setText] = React.useState("");
  
  useEffect(() => {
    var i = 0;
    var speed = 100;
    function typeWriter() {
      if (i < msg.length) {
        setText((prev) => prev + msg.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    return typeWriter();
  }
  , [msg]);

  


  return (

    <div className='w-[9 0%] flex flex-row justify-start'>
        <p className='bg-[#eee] text-black secondaryFont max-w-[60%] p-4 my-4'>{text}</p>
    </div>
  )
}

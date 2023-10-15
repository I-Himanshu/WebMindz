import React, { useEffect } from 'react'

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
    }
    typeWriter();
    return () => {};
  }, [msg]);

  return (

    <div className='w-[90%] flex flex-row justify-start'>
        <p id="markdown-container" className='bg-[#eee] text-black secondaryFont max-w-[60%] p-4 my-4'>{window.marked?window.marked(text):""}</p>
    </div>
  )
}

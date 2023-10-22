"use client";
import History from "../components/chat/history";
import Robo from "../components/chat/robo";
import User from "../components/chat/user";
import React, { useEffect, useState } from "react";
import { toggleListening } from "@/components/chat/speech";
import { log } from "console";

export default function Chat() {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  // get isblind from localstorage if have 
  // else set isblind to false

  const [isBlind, setIsBlind] = useState(
    localStorage.getItem("isBlind") === "true" ? true : false
  );

  const [MSGS, setMSGS] = useState([
    {
      text: "Welcome to WebMindZ?",
      isUser: false,
    },
  ]);
  useEffect(() => {
    const chats = localStorage.getItem("CHATS");
    if (chats) {
      setMSGS(JSON.parse(chats));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("CHATS", JSON.stringify(MSGS));
  }
  , [MSGS]);
  
  
  
  // console.log(window);
  const speak = (text:any)=>{
    if ("speechSynthesis" in window && isBlind) {
      console.log("Speaking");

      var to_speak = new SpeechSynthesisUtterance(text);
      to_speak.lang = "en-IN";
      to_speak.rate = 0.8;
      to_speak.pitch = 1;
      to_speak.voice = window.speechSynthesis.getVoices()[0];

      window.speechSynthesis.speak(to_speak);
    }

  }
  const sendMsg = async () => {
    // scroll to bottom
    const scrollHere = document.getElementById("scrollHere");

    if (transcript.trim().length === 0) return;
    setMSGS([...MSGS, { text: transcript, isUser: true }]);
    setTranscript("");
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: transcript }),
    });
    const data = await res.json();
    var text = data.chat;
    text = text.replace(/#/g, "hashtag");
    text = text.replace(/\*/g, "");
    text = text.replace(/_/g, "");
    speak(text);
    setMSGS([
      ...MSGS,
      ...[
        { text: transcript, isUser: true },
        { text: data.chat, isUser: false },
      ],
    ]);
    scrollHere?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="min-h-screen bg-[#15132f]">
      <div className="flex flex-row w-full min-h-screen">
        <div className="hidden md:flex flex-col items-center md:w-[30%] lg:w-[20%] max-h-screen hover:overflow-y-scroll overflow-y-hidden bg-[#080716] pt-8 px-2 pr-4 hover:pr-2">
          <div className="isBlind text-white">
            {/* Make a beautiful toggle button */}
            <span>
              IsBlind
            </span>
            <input
              type="checkbox"
              id="switch"
              className="hidden"
              checked={isBlind}
              onChange={(e) => {
                setIsBlind(e.target.checked);
                localStorage.setItem("isBlind", e.target.checked.toString());
              }}
            />
            <label htmlFor="switch" className="switch"></label>
          </div>
          <div className="flex flex-row justify-between w-full">
            <p className="text-white px-4 py-2 mb-8 w-full blueGrad secondaryFont text-lg cursor-pointer opacity-75 transition-all hover:opacity-100 mr-6">
              <b className="mr-4">+</b>
              New Chat
            </p>

            <div className="profile">
              <div className="relative group h-full w-full">
                <div className="w-[50px] h-[50px] rounded-full ">
                  <img
                    className="w-full h-full rounded-full cursor-pointer"
                    src="https://i.pravatar.cc/300"
                    alt=""
                  />
                </div>
                <div className="opacity-0 group-hover:opacity-100 absolute z-20 -bottom-[80px] right-0 bg-[#15132f] w-[150px] p-2">
                  <p className="secondaryFont text-[#eeeeee5f] cursor-pointer transition-all hover:text-white my-2 pb-2 border-b-[1px] border-[#eeeeee5f]">
                    Profile Name
                  </p>
                  <p className="secondaryFont text-[#eeeeee5f] cursor-pointer transition-all hover:text-white my-2">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
          <History />
          <History />
          <History />
          <History />
          <History />
          <History />
          <History />
          <History />
        </div>
        <div className="flex flex-col px-0 pb-10 md:px-0 justify-end items-center w-full md:w-[70%] lg:w-[80%] max-h-screen overflow-y-scroll">
          <header className="fixed top-0 left-0 w-full py-4 px-2 bg-[#080716] flex md:hidden justify-end items-center">
            <div className="flex flex-row justify-between w-full">
              <p className="px-4 text-white py-2 mb-0 w-full blueGrad secondaryFont text-base cursor-pointer opacity-75 transition-all hover:opacity-100 mr-6">
                <b className="mr-4">+</b>
                New Chat
              </p>
              <div className="profile">
                <div className="relative group h-full w-full">
                  <div className="w-[40px] h-[40px] rounded-full ">
                    <img
                      className="w-full h-full rounded-full cursor-pointer"
                      src="https://i.pravatar.cc/300"
                      alt=""
                    />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 absolute z-20 -bottom-[80px] right-0 bg-[#15132f] w-[150px] p-2">
                    <p className="secondaryFont text-[#eeeeee5f] cursor-pointer transition-all hover:text-white my-2 pb-2 border-b-[1px] border-[#eeeeee5f]">
                      Profile Name
                    </p>
                    <p className="secondaryFont text-[#eeeeee5f] cursor-pointer transition-all hover:text-white my-2">
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="w-full overflow-y-scroll mt-[75px] md:mt-0 px-4">
            {MSGS.map((msg: any, index: any) => {
              if (msg.isUser) {
                return <User key={index} msg={msg.text} />;
              } else {
                return <Robo key={index} msg={msg.text} />;
              }
            })}
            {/* Scroll to here on sendMsg */}
            <div id="scrollHere"></div>
          </div>
          <div className="flex flex-row justify-center bottom-[10px] md:bottom-[15px] pt-4 bg-[#15132f] mx-auto w-[100%] mt-8 relative">
            <div className="relative flex justify-center items-end max-h-[300px] bg-[#080716] px-4 w-[90%] md:w-[85%] chatInputBox overflow-y-scroll">
              <textarea
                className="w-[100%] min-h-[60px] text-white resize-none secondaryFont px-2 py-4 bg-[#080716] border-0 outline-none hover:border-none hover:outline-none rounded-lg chatInputTextarea"
                placeholder="Type your message..."
                // set row according to content in it
                rows={1}
                // set min height
                value={transcript}
                onInput={(e) => {
                  setTranscript(e.currentTarget.value);
                  e.currentTarget.style.height = "auto";
                  e.currentTarget.style.height =
                    e.currentTarget.scrollHeight + "px";
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMsg();
                  }
                }}
              />
              <button
                className="blueGradText mb-4 text-2xl opacity-75 transition-all hover:opacity-100 mx-2"
                onClick={sendMsg}
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
              <button
                className="blueGradText mb-4 text-2xl opacity-75 transition-all hover:opacity-100 mx-2"
                onClick={() => {
                  toggleListening(
                    listening,
                    setListening,
                    transcript,
                    setTranscript
                  );
                }}
              >
                <i className="fa-solid fa-microphone"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

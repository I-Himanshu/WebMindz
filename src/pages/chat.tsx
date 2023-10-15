"use client";
import History from "@/components/chat/history";
import Robo from "@/components/chat/robo";
import User from "@/components/chat/user";
import React, { useState } from "react";
import { toggleListening } from "@/components/chat/speech";

export default function Chat() {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [MSGS, setMSGS] = useState([
    {
      text: "Hello",
      isUser: false,
    },
    {
      text: "Hi",
      isUser: true,
    },
    {
      text: "How are you?",
      isUser: false,
    },
    {
      text: "I am fine",
      isUser: true,
    },
    {
      text: "What about you?",
      isUser: true,
    },
    {
      text: "I am fine too",
      isUser: false,
    },
    {
      text: "What are you doing?",
      isUser: false,
    },
    {
      text: "I am doing nothing",
      isUser: true,
    },
    {
      text: "What about you?",
      isUser: true,
    },
    {
      text: "I am doing nothing too",
      isUser: false,
    },
    {
      text: "Ok",
      isUser: true,
    },
    {
      text: "Bye",
      isUser: false,
    },
  ]);
  console.log(window);


  return (
    <main className="min-h-screen bg-[#15132f]">
      <div className="flex flex-row w-full min-h-screen">
        <div className="hidden md:flex flex-col items-center md:w-[30%] lg:w-[20%] max-h-screen hover:overflow-y-scroll overflow-y-hidden bg-[#080716] pt-8 px-2 pr-4 hover:pr-2">
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
              />
              <button
                className="blueGradText mb-4 text-2xl opacity-75 transition-all hover:opacity-100 mx-2"
                onClick={() => {
                  setMSGS([...MSGS, { text: transcript, isUser: true }]);
                  const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ input: transcript }),
                  };
                  fetch("/api/chat", requestOptions)
                    .then((response) => response.json())
                    .then((data) =>{
                      console.log(data.chat);
                    window?.responsiveVoice?.speak(data.chat, "UK English Male");

                      setMSGS([...MSGS, ...[{ text: transcript, isUser: true },{ text: data.chat, isUser: false }]])
                    }
                    );
                  setTranscript("");
                  
                }}
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

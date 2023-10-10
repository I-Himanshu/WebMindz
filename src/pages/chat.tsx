"use client";
import History from "@/components/chat/history";
import Robo from "@/components/chat/robo";
import User from "@/components/chat/user";
import React from "react";

export default function Chat() {
  return (
    <main className="min-h-screen bg-[#15132f]">
      <div className="flex flex-row w-full min-h-screen">
        <div className="flex flex-col items-center md:w-[30%] lg:w-[20%] max-h-screen hover:overflow-y-scroll overflow-y-hidden bg-[#080716] pt-8 px-2 pr-4 hover:pr-2">
          <div className="hidden md:flex flex-row justify-between w-full">
            <p className="px-4 py-2 mb-8 w-full blueGrad secondaryFont text-lg cursor-pointer opacity-75 transition-all hover:opacity-100 mr-6">
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
        <div className="flex flex-col pb-10 px-4 md:px-2 justify-end items-center md:w-[70%] lg:w-[80%] max-h-screen overflow-y-scroll">
          <div className="bg-400 overflow-scroll">
            <User />
            <Robo />
            <User />
            <User />
            <Robo />
            <User />
          </div>
          <div className="flex flex-row justify-center bottom-[30px] bg-[#15132f] mx-auto w-[100%] mt-8 relative">
            <div className="flex max-h-[300px] bg-[#080716] px-4 w-[65%] md:w-[85%] chatInputBox overflow-scroll">
              <textarea
                className="w-[100%] min-h-[60px] secondaryFont px-2 py-4 bg-[#080716] border-0 outline-none hover:border-none hover:outline-none rounded-lg chatInputTextarea"
                placeholder="Type your message..."
                // set row according to content in it
                rows={1}
                // set min height
                onInput={(e) => {
                  e.currentTarget.style.height = "auto";
                  e.currentTarget.style.height =
                    e.currentTarget.scrollHeight + "px";
                }}
              />
              <button className="blueGradText text-2xl opacity-75 transition-all hover:opacity-100 mx-2">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
              <button className="blueGradText text-2xl opacity-75 transition-all hover:opacity-100 mx-2">
                <i className="fa-solid fa-microphone"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

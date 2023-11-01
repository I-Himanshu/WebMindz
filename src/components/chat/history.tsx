"use c"
import Link from "next/link";
import React from "react";

export default function History({ ID,role }: { ID: any,role:any }) {
  console.log("ID", ID);
  // get last message from localstorage.CHATS[role][ID]
  let local = localStorage.getItem("CHATS");
  if (!local) return null;
  local = JSON.parse(local);
  if (!local) return null;
  const chats = local[role]||{};
  const msgs = chats[ID]||[];
  const lastMsg = msgs[msgs.length - 1];
  return (
    <Link href={`/chat/doctor/${ID}`}>
      <div className="px-2 py-2 pb-4 my-2 w-full flex flex-col blueGradBorder secondaryFont border-b-[1px] text-md cursor-pointer font-light opacity-75 transition-all hover:opacity-100 hover:bg-[#1b2c4b] hover:border-0 hover:pb-2 overflow-x-hidden">
        <p className="truncate w-[250px] secondaryFont opacity-75 text-white">
          {" "}
          <i className="fa-solid fa-comments mr-1"></i> 
          {lastMsg?.text}
        </p>
        <div className="flex justify-between mt-2">
          <div className="text-[0.5rem] text-white">
            <i className="fa-solid fa-calendar-days mr-1"></i>{
              // Show only date
              new Date(lastMsg?.timestamp).toLocaleDateString()
            }
          </div>
          <div className="text-[0.5rem] text-white">
            <i className="fa-solid fa-clock mr-1"></i>{
              // Show only time
              new Date(lastMsg?.timestamp).toLocaleTimeString()
            }
          </div>
        </div>
      </div>
    </Link>
  );
}

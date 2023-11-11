"use client"
import Login from "@/app/layouts/login"
import Landing from "./layouts/landing"
import Options from "@/app/layouts/options"
import UnitConverter from "@/app/layouts/unitconvertor";
import Games from "@/app/layouts/games";
import Chat from "@/app/layouts/Chat";
import Weather from "./layouts/weather";
import ChatOptions from "./layouts/ChatOptions";
import {auth} from "../firebase/config"
import { useEffect, useState } from "react";
import Blind from "./layouts/Blind";
import BlindOptions from "./layouts/BlindOptions";

export default function Home() {
  //  check if user is logged in or not

  // const [user, setUser]:[any,any] = useState(null)
  const [loading, setLoading] = useState(true)

  const [user, setUser]:[any,any] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
        window.location.href = "/landing"
      }
      setLoading(false)
    })
    // perform cleanup
    return unsubscribe
  }
    , []);
  // if user is logged in redirect to options page
  // if(!loading)
  // useEffect(() => {
  //   if (!user) {
  //     window.location.href = "/landing"
  //   }
  // }, [user]);

  if (loading) return <div>Loading...</div>

  return (
    <>
      <Landing/>
      {/* <Login/>   */}
      {/* <Options/> */}
      {/* <UnitConverter/> */}
      {/* <Games/> */}
     {/* <Chat /> */}
     {/* <Weather/> */}
     {/* <ChatOptions/> */}
     {/* <Blind/> */}
     {/* <BlindOptions/> */}
     </>
  );


//   return (
//     <>
//       {/* <Landing/> */}
//       {/* <Login/>   */}
//       <Options/>
//       {/* <UnitConverter/> */}
//       {/* <Games/> */}
//      {/* <Chat /> */}
//      {/* <Weather/> */}
//      {/* <ChatOptions/> */}
//      </>
//   );
}

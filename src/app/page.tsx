import Login from "@/pages/login";
import Landing from "../pages/landing";
import { useEffect } from "react";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import { auth } from "../firebase/config";

export default async function Home() {
  // const user = await auth.currentUser;
  // console.log(user);

  return (
    <>
      {/* <Landing/> */}
      {/* {user} */}
      <Login />
    </>
  );
}

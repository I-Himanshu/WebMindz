"use client";
import Search from '../../components/weather/Search';
import axios from 'axios';
import Weather from '../../components/weather/Weather';
import { useEffect, useState } from 'react';
import Logo from '../../components/weather/Logo';
export default function App() {
  const [city, setCity] = useState("Delhi");
  useEffect(
    () => {
      axios.get("http://ip-api.com/json").then(
        (res) => {
          setCity(res.data.city);
        }
      )
    }
  )
  console.log(city);
  const hours = new Date().getHours();
  return(
    <>
      <div className={`min-h-screen relative h-full w-full bg${hours} p-3 pt-20 lg:p-7 lg:pt-20 flex flex-col justify-start items-center `} >
        <div className="absolute w-full h-full bg-black/40 top-0 left-0 backdrop-blur-[100px]"></div>
        <Logo/>
        <Search city={city} setCity={setCity} />
       <Weather city={city}/>
      </div>
    </>
  )
}
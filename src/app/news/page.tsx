"use client";
import React, { useEffect, useState } from "react";

function NewsPage() {
  const [news, setNews]: [any, any] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [isBlind, setIsBlind] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isBlind")) {
      setIsBlind(true);
    }
  }, []);
  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((err: any) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as any).message}</div>;
  const speak = (text: string) => {
    if ("speechSynthesis" in window && isBlind) {
      console.log("Speaking");
      console.log(text);
      var to_speak = new SpeechSynthesisUtterance(text);
      to_speak.lang = "en-IN";
      to_speak.rate = 0.8;
      to_speak.pitch = 1;
      to_speak.voice = window.speechSynthesis.getVoices()[0];
      window.speechSynthesis.speak(to_speak);
    }
  };
  
  if (isBlind) {
    var currentReading = 0;
    // speak(news[currentReading++].title);
    speak("Welcome to News section, press any key or tap anywhere for next news")
    window.addEventListener("keydown", (e) => {
      if (news[currentReading]) {
        speak(news[currentReading++].title);
      } else {
        speak("No more news");
      }
    });
    // For mouse click
    window.addEventListener("click", (e) => {
      if (news[currentReading]) {
        speak(news[currentReading++].title);
      } else {
        speak("No more news");
      }
    });
  }
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#15132f] w-full p-6 md:p-12 lg:p-20 relative">
        <div className="flex flex-row justify-center items-center w-full z-20">
          <p className="blueGradText primaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem]">
            Latest News
          </p>
          <img
            className="w-12 md:w-32"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-reading-book-5665783-4721944.png?f=webp"
            alt=""
          />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 md:mt-20">
          {news.map((item: any, index: any) => (
            <li
              key={index}
              className="pb-4 overflow-hidden flex flex-col rounded-lg shadow-md text-center blueGrad2 group text-black transition-all hover:scale-110"
              onClick={() => {
                isBlind &&
                  speak(`
                                 ${item.title}
                                `);
              }}
            >
              <img className="h-[200px] w-full" src={item.urlToImage} alt="" />
              <div className="pt-4 px-2">
                <p className="text-lg text-left font-bold opacity-80 leading-5">
                  {item.title}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500  group-hover:text-white mt-4 w-full justify-end">
                  <time dateTime="2023-10-23">{item.publishedAt}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{item.author}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default NewsPage;


"use client"
export const speak = (text:any)=>{
    window.speechSynthesis.cancel();
    var isBlind = localStorage.getItem("isBlind");
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
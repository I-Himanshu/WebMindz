export default function Landing() {
  return (
    <main className="bg flex min-h-screen flex-col items-center justify-center w-full p-24 gap-10">
        
          <div className="flex flex-row flex-wrap items-center justify-evenly w-full space-y-4 z-20">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-say-hello-5665790-4721951.png?f=webp" alt="" />
            <div className="flex flex-col">
              <h1 className="text-[5vmin] secondaryFont">Welcome to </h1>
              <b className="text-[12vmin] -mt-6 blueGradText">WebMindz</b>
              <p className="tertiaryFont -mt-6 ml-5 font-thin opacity-70">Chat Like Never Before: AI at Your Fingertips</p>
            <div className="flex flex-row justify-start mt-12 items-center">
              <button className="grid place-items-center px-8 py-3 mx-3 bg-[#4884ee] text-white secondaryFont opacity-75 transition-all hover:opacity-100">Login</button>
              <button className="grid place-items-center px-8 py-3 mx-3 bg-white text-[#4884ee] secondaryFont opacity-75 transition-all hover:opacity-100">SignUp</button>
            </div>
            </div>
        </div>
    </main>
  );
}

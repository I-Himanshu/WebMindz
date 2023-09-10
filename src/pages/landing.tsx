export default function Landing() {
  return (
    <main className="bg flex min-h-screen flex-col items-center justify-center w-full p-24 gap-10">
        
          <div className="flex flex-row items-center justify-evenly w-full space-y-4 z-20">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-say-hello-5665790-4721951.png?f=webp" alt="" />
            <div className="flex flex-col">
              <h1 className="text-[5vmin] secondaryFont">Welcome to </h1>
              <b className="text-[12vmin] -mt-6 blueGradText">WebMindz</b>
              <p className="tertiaryFont -mt-6 mr-2 text-right font-thin opacity-70">Chat Like Never Before: AI at Your Fingertips</p>
            </div>
        </div>
    </main>
  );
}

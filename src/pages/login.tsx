export default function Login() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-center lg:justify-between w-full lg:px-40">
        <img className="hidden lg:block" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-say-hello-5665790-4721951.png" alt="" />
        <div className="cont relative translate-y-[10%] lg:translate-y-0">
        <img className="absolute lg:hidden top-0 left-0 -translate-y-[55%] block" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-say-hello-5665790-4721951.png" alt="" />
          <div className="card relative z-20 flex flex-col max-w-[300px] lg:max-w-[500px] max-h-[700px] w-full h-full bg-white p-10 text-black">
          <h2 className="font-extrabold blueGradText text-4xl">Hola!</h2>
          <p className="mt-1">Unlock the Gateway to Your Digital Realm with WebMindz.</p>

          <form className="flex flex-col mt-7 text-lg">
            <div className="input-container flex-col flex">
              <label className="font-semibold text-[#666] my-2" htmlFor="email">Your email</label>
              <input className=" border-b-2 border-[#06bcfb] outline-none" type="email" id="email" placeholder="Enter your email" />
            </div> 
            <div className="input-container flex-col flex mt-5">
              <label className="font-semibold text-[#666] my-2" htmlFor="password">Your password</label>
              <input className=" border-b-2 border-[#06bcfb] outline-none" type="password" id="password" placeholder="Enter your password" /> 
            </div>
            
            <button className="text-white font-semibold mt-10 p-3 rounded-md blueGrad duration-[0.5ms] hover:scale-105">Continue</button>
          </form>
        </div>
        </div>
    </main>
  );
}

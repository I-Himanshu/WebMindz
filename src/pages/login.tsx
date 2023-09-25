export default function Login() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between w-full px-40">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-say-hello-5665790-4721951.png" alt="" />
        <div className="card flex flex-col max-w-[300px] lg:max-w-[500px] max-h-[700px] w-full h-full bg-white p-10 text-black">
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
    </main>
  );
}

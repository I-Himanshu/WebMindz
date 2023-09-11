export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="card flex flex-col max-w-[500px] max-h-[700px] w-full h-full bg-white p-10">
          <h2 className="font-extrabold">Hello there</h2>
          <p>Please enter your email & password to create an account</p>

          <form className="flex flex-col mt-10 text-lg">
            <div className="input-container flex-col flex">
              <label className="font-semibold" htmlFor="email">Your email</label>
              <input className=" border-b-2 border-cyan-400 outline-none" type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input-container flex-col flex mt-5">
              <label className="font-semibold" htmlFor="password">Your password</label>
              <input className=" border-b-2 border-cyan-400 outline-none" type="password" id="password" placeholder="Enter your password" /> 
            </div>
            
            <button className="bg-cyan-400 text-white font-semibold mt-10 p-3 rounded-md">Continue</button>
          </form>
        </div>
    </main>
  );
}

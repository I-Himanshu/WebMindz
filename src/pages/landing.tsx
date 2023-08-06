import Image from "next/image";

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative flex flex-col items-center justify-center w-full max-w-5xl px-8 py-16 space-y-8 text-center text-white lg:space-y-0 lg:text-left lg:px-0 lg:py-0 lg:space-x-8 lg:flex-row">
          <div className="flex flex-col items-center justify-center space-y-4 lg:items-start">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400">
              Welcome to WebMindz
            </h1>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left place-items-center">
        <button
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Chat
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Chat with out very friendly AI and get your doubts cleared.
          </p>
        </button>

        <button
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Create
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Create amazing art using your text prompt and our AI will generate
          </p>
        </button>

        <button
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about the latest technologies and how to use them.
          </p>
        </button>

        <button
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Explore
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the world of AI and how it is changing the world.
          </p>
        </button>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full py-16 text-center text-white lg:space-y-0 lg:text-left lg:px-0 lg:py-0 lg:space-x-8 lg:flex-row">
        <div className="relative flex flex-col items-center justify-center space-y-4 lg:items-start">
          <input className="w-full px-4 py-2 text-lg text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your prompt here" />
          <button className="px-4 py-2 text-lg text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Generate</button>
        </div>
      </div>

    </main>
  );
}

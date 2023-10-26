import IconBox from "@/components/options/box";

export default function Options() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full p-6 md:p-12 lg:p-20 relative">
      <div className="flex flex-row justify-center items-center w-full">
        <p className="blueGradText primaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem]">Choose what to discover</p>
        <img className="w-32 rotate-[15deg]" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-with-megaphone-5665782-4721943.png?f=webp" alt="" />
      </div>
      <div className="container mx-auto mt-7 md:mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <IconBox iconClass="fa-solid fa-message" text="Chat" />
        <IconBox iconClass="fa-solid fa-newspaper" text="News" />
        <IconBox iconClass="fa-solid fa-cloud" text="Weather" />
        <IconBox iconClass="fa-solid fa-gamepad" text="Games" />
        <IconBox iconClass="fa-solid fa-language" text="Translator" />
        <IconBox iconClass="fa-solid fa-scale-unbalanced-flip" text="Unit Convertor" />
        <IconBox iconClass="fa-solid fa-file" text="File Drop" />
       </div>
      </div>
    </main>
  )
}

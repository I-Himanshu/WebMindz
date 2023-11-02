import IconBox from "@/components/options/box";
import Link from "next/link";

export default function Options() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full p-6 md:p-12 lg:p-20 relative">
      <div className="flex flex-row justify-center items-center w-full">
        <p className="blueGradText primaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem]">Choose what to discover</p>
        <img className="w-32 rotate-[15deg]" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-with-megaphone-5665782-4721943.png?f=webp" alt="" />
      </div>
      <div className="container mx-auto mt-7 md:mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <Link href={"/chat"}>
          <IconBox iconClass="fa-solid fa-message" text="Chat" />
        </Link>

        <Link href={"/news"}>
          <IconBox iconClass="fa-solid fa-newspaper" text="News" />
        </Link>

        <Link href={"/weather"}>
          <IconBox iconClass="fa-solid fa-cloud" text="Weather" />
        </Link>

        <Link href={"/games"}>
          <IconBox iconClass="fa-solid fa-gamepad" text="Games" />
        </Link>
        
        
        <IconBox iconClass="fa-solid fa-language" text="Translator" />
      <Link href={"/unitconvertor"}>
          <IconBox iconClass="fa-solid fa-calculator" text="Unit Convertor" />
        </Link>
        {/* <IconBox iconClass="fa-solid fa-file" text="File Drop" /> */}
       </div>
      </div>
    </main>
  )
}

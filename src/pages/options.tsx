import IconBox from "@/components/options/box";

export default function Options() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-start justify-start lg:justify-between w-full lg:p-20 relative">
      <div className="flex flex-row justify-center items-center w-full">
        <p className="blueGradText secondaryFont text-7xl">Choose what to discover</p>
        <img className="w-32 rotate-[15deg]" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-with-megaphone-5665782-4721943.png?f=webp" alt="" />
      </div>
      <div className="grid">
        <IconBox iconClass="fa-solid fa-house" text="Robots" />
      </div>
    </main>
  )
}

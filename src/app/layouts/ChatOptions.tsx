import IconBox from "@/components/options/box";

export default function ChatOptions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full p-6 md:p-12 lg:p-20 relative">
      <div className="flex flex-row justify-center items-center w-full">
        <p className="blueGradText secondaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem]">Choose what to discover</p>
        <img className="w-32 rotate-[15deg]" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-with-megaphone-5665782-4721943.png?f=webp" alt="" />
      </div>
      <div className="container mx-auto mt-7 md:mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <IconBox iconClass="fa-solid fa-user-doctor" text="Doctor" />
        <IconBox iconClass="fa-solid fa-scale-balanced" text="Lawyer" />
        <IconBox iconClass="fa-solid fa-graduation-cap" text="Student" />
        <IconBox iconClass="fa-solid fa-chalkboard-user" text="Teacher" />
        <IconBox iconClass="fa-solid fa-laptop-code" text="Developer" />
        <IconBox iconClass="fa-solid fa-robot" text="Bot" />
       </div>
      </div>
    </main>
  )
}

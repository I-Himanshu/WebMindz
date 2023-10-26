import Currency from '@/components/unitconvertor/currency'
import Length from '@/components/unitconvertor/length'
import Volume from '@/components/unitconvertor/volume'
import Weight from '@/components/unitconvertor/weight'
import React from 'react'

export default function unitconvertor() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#15132f] w-full p-6 md:p-12 lg:p-20 relative">
      <div className="flex flex-row justify-center items-center w-full z-20">
        <p className="blueGradText primaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem]">Convert the Units!</p>
        <img className="w-32" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-with-creative-idea-6374843-5272689.png?f=webp" alt="" />
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 md:mt-8 lg:grid-cols-4 gap-8 mt-4">
        <Length/>
        <Weight/>
        <Volume/>
        <Currency/>
      </div>
    </main>
  )
}

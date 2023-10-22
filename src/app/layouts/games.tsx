import GameBox from '@/components/games/gamebox'
import React from 'react'
import data from '../../helpers/Games.json';

export default function Games() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full p-6 md:p-12 lg:p-20 relative">
    <div className="bg2"></div>
    <div className="flex flex-row justify-center items-center w-full z-20">
      <p className="blueGradText secondaryFont text-3xl md:text-5xl lg:text-7xl md:leading-[4rem]">Enjoy Play Time!</p>
      <img className="w-32" src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-with-puzzle-6374842-5272686.png?f=webp" alt="" />
    </div>
    <div className="container mx-auto mt-7 md:mt-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.map((item, index) => (
        <GameBox key={index} data={item} />
      ))}
     </div>
    </div>
  </main>
  )
}

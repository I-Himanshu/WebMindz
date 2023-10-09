// components/InfoBox.tsx
import React from 'react';

type GameBoxProps = {
  data: {
    imageSrc: string;
    name: string;
    description: string;
    visitLink: string;
    tag: string;
  };
};

const GameBox: React.FC<GameBoxProps> = ({ data }) => {
  return (
    <div className="relative blueGrad2 group rounded-xl overflow-hidden shadow-md p-4 transition-all hover:scale-105">
      <img className="h-60 w-full transition-all group-hover:scale-110" src={data.imageSrc} alt={data.name} />
      <div className="p-0 mt-4">
        <h2 className="text-2xl secondaryFont font-semibold text-black transition-all group-hover:text-white">{data.name}</h2>
        <p className="text-gray-600 secondaryFont text-sm my-1 transition-all group-hover:text-white">{data.description}</p>
        <span className="absolute top-8 tertiaryFont right-0 bg-blue-500 text-white py-1 px-3 text-base">
          {data.tag}
        </span>
        <div className="mt-4">
          <a
            href={data.visitLink}
            className="text-blue-500 hover:underline transition-all group-hover:text-white secondaryFont"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameBox;

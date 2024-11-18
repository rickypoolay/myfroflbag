import { Backpack, Disc3Icon } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const DiscCard = ({
  manufacturer,
  disc,
  speed,
  glide,
  fade,
  turn,
}: {
  manufacturer: string;
  disc: string;
  speed: number;
  glide: number;
  fade: number;
  turn: number;
}) => {
  const numberStyle: string =
    'p-1 rounded-sm w-full max-w-[300px] bg-[#404040] ';
  // grid grid-cols-4 gap-4 mt-4 p-2
  // bg - [#bfecb3];
  // bg - [#ffcc66];
  // bg-[#b9dcff]
  // bg - [#ffff99];
  return (
    <div className='flex flex-col items-center justify-center bg-[#1d1d1d] sm:max-w-[250px] w-full p-4 rounded-md'>
      <Disc3Icon size={60} />
      <h2 className='mt-4 font-bold'>{disc}</h2>
      <p className='text-sm'>{manufacturer}</p>
      <div className='text-[.75rem] flex justify-around w-full gap-2 mt-8 text-center '>
        <div className={`${numberStyle} `}>
          <p>S</p>
          <p>{speed}</p>
        </div>
        <div className={`${numberStyle} `}>
          <p>G</p>
          <p>{glide}</p>
        </div>
        <div className={`${numberStyle} `}>
          <p>T</p>
          <p>{turn}</p>
        </div>
        <div className={`${numberStyle} `}>
          <p>F</p>
          <p>{fade}</p>
        </div>
      </div>
      <div className='flex mt-2 min-w-full gap-2'>
        <button className='flex gap-1 items-center justify-center bg-green-600 py-1 flex-1 rounded-sm px-2'>
          <p className='text-sm'>Bag it</p>
          <Backpack height={20} color='white' strokeWidth={1.25} />
        </button>
        <button className='flex gap-1 items-center justify-center bg-[#2e2e2e] py-1 flex-1 rounded-sm px-2'>
          <a href='/discs' className='text-sm'>
            <p className='text-sm'>View </p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default DiscCard;

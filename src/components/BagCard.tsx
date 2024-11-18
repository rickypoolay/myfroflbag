import { Disc3Icon } from 'lucide-react';

const BagCard = () => {
  return (
    <div className='w-full bg-[#1d1d1d] p-4 pr-0 rounded-md'>
      <a href='/'>
        <h2 className='mb-5 text-lg font-light'>Bag Name</h2>
        <div className='flex'>
          <div className='w-full overflow-x-auto flex-grow pr-4 rounded-md'>
            <div className='flex items-center justify-start gap-2 min-w-max'>
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
              <Disc3Icon size={60} absoluteStrokeWidth={false} />
            </div>
          </div>
          <div className='flex items-center rounded-tl-sm rounded-bl-sm ml-1 min-h-full bg-[#1d8d4a] p-2'>
            <p className='text-center font-semibold'>20</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BagCard;

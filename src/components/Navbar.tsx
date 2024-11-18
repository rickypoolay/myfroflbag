import NavbarIcon from './NavbarIcon';
import { Backpack, Disc3Icon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='w-[120px] rounded-lg flex flex-col items-center sticky '>
      <a href='/' className='mb-14 text-2xl '>
        MDB
      </a>
      <ul className='flex flex-col items-center justify-center gap-3 mx-4 text-lg'>
        <NavbarIcon
          href='/bags'
          icon={<Backpack size={30} color='white' />}
          padding={4}
        />
        <NavbarIcon
          href='/discs'
          icon={<Disc3Icon size={30} color='white' />}
          padding={4}
        />
      </ul>
    </nav>
  );
};

export default Navbar;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Socials } from '.';

const Header: React.FC = () => {
  return (
    <div className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          <Link href={'/'}>
            <div className='text-3xl text-accent'>Mehrad Farahnak</div>
          </Link>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Socials } from '.';

type Props = {};

function Header({}: Props) {
  return (
    <div className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          <Link href={'/'}>
            <Image src={'/logo.svg'} alt='' priority width={220} height={48} />
          </Link>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Header;

import Image from 'next/image';
import React from 'react';

const Avatar: React.FC = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image src={'/avatar.png'} alt='' width={300} height={700} className='translate-z-0 w-full h-full' />
    </div>
  );
};

export default Avatar;

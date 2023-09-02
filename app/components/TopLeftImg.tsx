import Image from 'next/image';
import React from 'react';

type Props = {};

function TopLeftImg({}: Props) {
  return (
    <div className='absolute left-0 top-0 mix-blend-color-dodge z-0 w-[200] xl:w-[400] opacity-50'>
      <Image src='/top-left-img.webp' width={400} height={400} alt='' />
    </div>
  );
}

export default TopLeftImg;

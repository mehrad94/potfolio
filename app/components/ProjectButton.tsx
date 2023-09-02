import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const ProjectButton = (props: Props) => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href={'/work'}>
        <div className='flex relative w-[185px] h-[185px] bg-circleStar justify-center items-center bg-cover bg-center bg-no-repeat group'>
          <Image
            src={'/rounded-text.png'}
            width={141}
            height={148}
            alt=''
            className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
          />
          <ArrowRightIcon className='absolute w-8 group-hover:translate-x-2 translate-all duration-300' />
        </div>
      </Link>
    </div>
  );
};

export default ProjectButton;

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { transitionVariant } from '../variants';
type Props = {};

const Transition = (props: Props) => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]'
        variants={transitionVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]'
        variants={transitionVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]'
        variants={transitionVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      />
    </>
  );
};

export default Transition;

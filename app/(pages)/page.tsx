'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { Avatar, ParticlesContainer, ProjectButton } from '../components';
import { fadeIn } from '../variants';

const Home: React.FC = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <motion.h1 variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='h1'>
            Transforming Ideas <br /> Into <span className='text-accent'> Applications</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            FrontEnd Developer with over 8 years of practical experience in JavaScript, specializing in frameworks
            including React (6+ years) and Next.js (2+ years). Optimized front-end codebase by refactoring existing code
            and implementing best practices.
          </motion.p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectButton />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectButton />
          </motion.div>
        </div>
      </div>
      <div className='w-full h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0' />
        <ParticlesContainer />
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full h-full max-w-[600px] max-h-[700px] absolute -bottom-24 lg:bottom-0 lg:right-[12%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

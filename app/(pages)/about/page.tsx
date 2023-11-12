'use client';
import { aboutData, fadeIn } from '@/app/variants';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import CountUp from 'react-countup';
import { Circles } from '../../components';
import Skills from './Skills';
import Experiences from './Experiences';

const RenderData = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <Skills />;
    case 1:
      return <Experiences />;
  }
  return null;
};
const About: React.FC = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full flex bg-primary py-32 text-center xl:text-left z-50'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        {/* <Avatar /> */}
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* Text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h4 xl:h2'>
            Convert <span className='text-accent'> COFFEE </span> to optimized code.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-xs text-left'
          >
            • Customized 10+ user-friendly websites using HTML, CSS, and JavaScript;
            <br />
            • Influenced developer communities on platforms like StackOverflow (+348K of reach) and GitHub.
            <br />
            • Created over 500 components in Storybook, ensuring clear code organization and reducing development time
            by 25%.
            <br />
            • Implemented CI/CD pipelines for 10+ projects using GitHub Actions, resulting in an average 50% reduction
            in deployment time.
            <br />
            • Conceptualized Redux toolkit to manage state and queries in applications, resulting in a 20% improvement
            in query response times and a 30% increase in application scalability.
            <br />
            • Proficient in the Tailwind CSS framework and streamlined CSS development, saving 30% on design and
            implementation time.
            <br />• Enhanced application performance and scalability, resulting in a 25% reduction in page load times.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={10} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>
              {/* Clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={7} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
              </div>
              {/* Projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={12} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
              </div>
              {/* Awards */}
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`
                  ${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  key={item.title}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <RenderData index={index} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

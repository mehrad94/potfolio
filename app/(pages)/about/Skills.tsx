import React, { ReactNode } from 'react';

import { BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';

import { BsGit, BsGithub } from 'react-icons/bs';
import { DiLinux } from 'react-icons/di';
import {
  SiCypress,
  SiFramer,
  SiGithubactions,
  SiGitlab,
  SiJest,
  SiMocha,
  SiNextdotjs,
  SiReactquery,
  SiStorybook,
  SiSwagger
} from 'react-icons/si';

const skills = [
  {
    title: 'Languages',
    icons: [
      <FaHtml5 key={'faHtml5'} />,
      <FaCss3 key={'faCss'} />,
      <FaJs key={'faHtml5'} />,
      <BiLogoTypescript key={'typescript'} />
    ]
  },
  {
    title: 'Frameworks',
    icons: [<FaReact key={'faHtml5'} />, <SiNextdotjs key={'faHtml5'} />, <BiLogoTailwindCss key={'tailwind'} />]
  },
  {
    title: 'State management',
    icons: [<BiLogoRedux key={'redux'} />, <SiReactquery key={'react-query'} />]
  },

  {
    title: 'Version controls',
    icons: [
      <BsGit key={'git'} />,
      <BsGithub key={'swagger'} />,
      <SiGitlab key={'storybook'} />,
      <SiGithubactions key={'actions'} />
    ]
  },
  {
    title: 'Test frameworks',
    icons: [<SiCypress key={'cypress'} />, <SiJest key={'jest'} />, <SiMocha key={'mocha'} />]
  },
  {
    title: 'Utility',
    icons: [
      <SiFramer key={'faHtml5'} />,
      <SiSwagger key={'swagger'} />,
      <SiStorybook key={'storybook'} />,
      <DiLinux key={'linux'} />
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className='gap-4 flex flex-wrap xl:flex-col justify-start'>
      {skills.map((item) => {
        return (
          <div
            className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center py-3 my-2 justify-center  text-white/60'
            key={item.title}
          >
            <div className='font-light mb-2 md:mb-0 text-sm whitespace-nowrap xl:text-lg'>{item.title}</div>
            <div className='hidden md:flex'>-</div>
            <div>{(item as any).stage}</div>
            <div className='flex items-center gap-2'>
              {(item as any).icons?.map((icon: ReactNode, itemIndex: number) => {
                return (
                  <div id={`ic-${itemIndex}`} className='xl:text-2xl  text-white' key={`ic-${itemIndex}`}>
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;

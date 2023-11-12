import { BiHomeSmile, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript, BiUserCircle } from 'react-icons/bi';
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';

import { BsBriefcase, BsGit, BsGithub } from 'react-icons/bs';
import { DiLinux } from 'react-icons/di';
import { RxCrop, RxDesktop, RxPencil2, RxReader, RxRocket } from 'react-icons/rx';
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

export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8]
      }
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};

const iconClassnames = 'h-5 w-5';

export const navData = [
  { name: 'home', path: '/', icon: <BiHomeSmile className={iconClassnames} /> },
  { name: 'about', path: '/about', icon: <BiUserCircle className={iconClassnames} /> },
  { name: 'work', path: '/work', icon: <BsBriefcase className={iconClassnames} /> }
];

export const transitionVariant = {
  initial: { x: '100%', width: '100%' },
  animate: { x: '0%', width: '0%' },
  exit: { x: ['100%', '0%'], width: ['100%', '0%'] }
};

export const skills = {
  title: 'skills',
  info: [
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
  ]
};
export const aboutData = [
  {
    title: 'skills'
  },
  {
    title: 'experiences'
  }
];

export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'lorem ipsul dolor sit amet, consectetur adipiscing elit'
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'lorem ipsul dolor sit amet, consectetur adipiscing elit'
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'lorem ipsul dolor sit amet, consectetur adipiscing elit'
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'lorem ipsul dolor sit amet, consectetur adipiscing elit'
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'lorem ipsul dolor sit amet, consectetur adipiscing elit'
  }
];

export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'AghProfile',
          path: '/aghprofile.jpg',
          url: 'https://aghprofile.ir/'
        },
        {
          title: 'dropp',
          path: '/dropp.jpg',
          url: 'https://droppgroup.com/'
        },
        {
          title: 'Ecommerce',
          path: '/ecommerce.jpg',
          url: 'https://droppcommerce.ir/'
        },
        {
          title: 'ApiEco',
          path: '/apieco.jpg',
          url: 'https://apieco.ir/home-en.html'
        }
      ]
    },
    {
      images: [
        {
          title: 'chechilas',
          path: '/chechilas.jpg',
          url: 'https://chechilas.com/'
        }
      ]
    }
  ]
};

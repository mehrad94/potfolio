import {
  BriefcaseIcon,
  ChatBubbleLeftEllipsisIcon,
  EnvelopeOpenIcon,
  HomeModernIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { RxRocket, RxReader, RxDesktop, RxPencil2, RxCrop, RxCode } from 'react-icons/rx';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from 'react-icons/si';

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
  { name: 'home', path: '/', icon: <HomeModernIcon className={iconClassnames} /> },
  { name: 'about', path: '/about', icon: <UserCircleIcon className={iconClassnames} /> },
  { name: 'services', path: '/services', icon: <WrenchScrewdriverIcon className={iconClassnames} /> },
  { name: 'work', path: '/work', icon: <BriefcaseIcon className={iconClassnames} /> },
  { name: 'contact', path: '/contact', icon: <EnvelopeOpenIcon className={iconClassnames} /> }
];

export const transitionVariant = {
  initial: { x: '100%', width: '100%' },
  animate: { x: '0%', width: '0%' },
  exit: { x: ['100%', '0%'], width: ['100%', '0%'] }
};

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={'faHtml5'} />,
          <FaCss3 key={'faCss'} />,
          <FaJs key={'faHtml5'} />,
          <FaReact key={'faHtml5'} />,
          <SiNextdotjs key={'faHtml5'} />,
          <SiFramer key={'faHtml5'} />,
          <FaWordpress key={'faHtml5'} />
        ]
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={'faHtml5'} />, <SiAdobexd key={'faHtml5'} />, <SiAdobephotoshop key={'faHtml5'} />]
      }
    ]
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012'
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010'
      }
    ]
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023'
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012'
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010'
      }
    ]
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011'
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009'
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006'
      }
    ]
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
          title: 'title',
          path: '/thumb1.jpg'
        },
        {
          title: 'title',
          path: '/thumb2.jpg'
        },
        {
          title: 'title',
          path: '/thumb3.jpg'
        },
        {
          title: 'title',
          path: '/thumb4.jpg'
        }
      ]
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg'
        },
        {
          title: 'title',
          path: '/thumb1.jpg'
        },
        {
          title: 'title',
          path: '/thumb2.jpg'
        },
        {
          title: 'title',
          path: '/thumb3.jpg'
        }
      ]
    }
  ]
};

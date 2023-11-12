import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow, FaTelegramPlane } from 'react-icons/fa';

const stackOverflowLink = 'https://stackoverflow.com/users/7639102/mehrad-farahnak';
const githubLink = 'https://github.com/mehrad94';
const linkedinLink = 'https://www.linkedin.com/in/mehradfarahnak/';
const telegramLink = 'https://t.me/mehrad_farahnak';
const email = 'mailto:mehradfarahnak9@gmail.com';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link target='_blank' href={stackOverflowLink} className='hover:text-accent transition-all duration-300'>
        <FaStackOverflow />
      </Link>
      <Link target='_blank' href={githubLink} className='hover:text-accent transition-all duration-300'>
        <FaGithub />
      </Link>
      <Link target='_blank' href={linkedinLink} className='hover:text-accent transition-all duration-300'>
        <FaLinkedin />
      </Link>
      <Link target='_blank' href={telegramLink} className='hover:text-accent transition-all duration-300'>
        <FaTelegramPlane />
      </Link>
      <Link target='_blank' href={email} className='hover:text-accent transition-all duration-300'>
        <FaEnvelope />
      </Link>
    </div>
  );
};

export default Socials;

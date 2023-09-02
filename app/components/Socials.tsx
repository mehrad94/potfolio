import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow, FaTelegramPlane } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href='' className='hover:text-accent transition-all duration-300'>
        <FaStackOverflow />
      </Link>
      <Link href='' className='hover:text-accent transition-all duration-300'>
        <FaGithub />
      </Link>
      <Link href='' className='hover:text-accent transition-all duration-300'>
        <FaLinkedin />
      </Link>
      <Link href='' className='hover:text-accent transition-all duration-300'>
        <FaTelegramPlane />
      </Link>
      <Link href='' className='hover:text-accent transition-all duration-300'>
        <FaEnvelope />
      </Link>
    </div>
  );
};

export default Socials;

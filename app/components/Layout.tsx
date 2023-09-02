import React, { ReactNode } from 'react';
import { Sora } from 'next/font/google';
import TopLeftImg from './TopLeftImg';
import Header from './Header';
import Nav from './Nav';
type Props = {
  children: ReactNode;
};

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;

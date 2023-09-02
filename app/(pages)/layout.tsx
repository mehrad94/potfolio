'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Layout, Transition } from '../components';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname;
  return (
    <section>
      <Layout>
        <AnimatePresence mode='sync'>
          <motion.div key={pathname()} className='h-full'>
            <Transition />
            {children}
          </motion.div>
        </AnimatePresence>
      </Layout>
    </section>
  );
}

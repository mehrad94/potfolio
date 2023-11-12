import React, { ReactNode } from 'react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Pejvak',
    stage: '2021 - now'
  },
  {
    title: 'Senior Frontend Developer ',
    company: 'Dropp Technologies group',
    stage: '2020 - 2021'
  },
  {
    title: 'React Developer',
    company: 'ApiEco',
    stage: '2019 - 2020'
  },
  {
    title: 'Senior React Frontend Developer',
    company: 'Transaction Century',
    stage: '2017 - 2018'
  },
  {
    title: 'Frontend Developer',
    company: 'Chechilas',
    stage: '2016 - 2017'
  },
  {
    title: 'Frontend Developer',
    company: 'Faranik',
    stage: '2015 - 2016'
  }
];
const Experiences: React.FC = () => {
  return (
    <div>
      {experiences.map((item) => {
        return (
          <div
            className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center xl:py-3 my-2 justify-center  text-white/60'
            key={item.title}
          >
            <div className='flex flex-col'>
              <div className='flex items-center '>
                <div className='font-light md:mb-0 text-xs xl:text-lg'>{item.title}</div>
                <div className='hidden md:flex text-sm xl:text-md'>-</div>
                <div className='text-sm ml-1 font-light xl:text-md items-center flex'>{(item as any).stage}</div>
              </div>
              <div className='flex items-center gap-2 text-xs xl:text-sm text-gray-100/30'>{item.company}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;

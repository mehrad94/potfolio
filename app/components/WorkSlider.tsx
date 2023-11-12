import React from 'react';
type Props = {};

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { workSlides } from '../variants';
import Link from 'next/link';

const WorkSlider: React.FC = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((item, index) => {
        return (
          <SwiperSlide key={`work-${index}`}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {item.images.map((image, index) => {
                return (
                  <div
                    key={image.title}
                    className='relative rounded-lg overflow-hidden flex item-center justify-center group'
                  >
                    <div className='flex item-center justify-center relative overflow-hidden group'>
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* Gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700' />
                      {/* Title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <Link
                          href={image.url}
                          target='_blank'
                          className='flex item-center gap-x-2 text-[13px] tracking-[0.2em]'
                        >
                          <div className='delay-100 uppercase'>Live</div>
                          <div className='translate-y-[500%] uppercase group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            Project
                          </div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

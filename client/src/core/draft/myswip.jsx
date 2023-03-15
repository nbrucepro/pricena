import React, { useRef } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination]);

const MySwiper = () => {
  const swiperRef = useRef(null);

  return (
      <div className='myswipera'>
      <Swiper
      modules={[Pagination]}
      ref={swiperRef}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/id/1/800/600" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/2/800/600" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/3/800/600" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
        </div>
  );
};

export default MySwiper;

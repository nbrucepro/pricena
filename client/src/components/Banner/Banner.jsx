import { Box } from '@material-ui/core';
import React, { useRef } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import B1 from './B1';

SwiperCore.use([Pagination]);
const Banner = () => {
  const swiperRef = useRef(null);
  return (
    <Box style={{ display: 'flex' }}> 
    <B1/>    
      <div className='myswipera'>
      <Swiper
      modules={[Pagination]}
      ref={swiperRef}
      pagination={{ clickable: true }} 
    > 
      <SwiperSlide>
        <div className="imgsli">
        <img src="../../../assets/s23price.jpg" alt="Slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgsli">
          <hr/>
        <img src="../../../assets/iphone14price.jpg" alt="Slide 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../assets/iphone13price.jpg" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../assets/flip3_en.jpg" alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../assets/apple-iphone-12-price.jpg" alt="Slide 5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../assets/note10EN.png" alt="Slide 6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../assets/Banner_HuaweiP30_EN.jpg" alt="Slide 7" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../assets/office-supplies-en.png" alt="Slide 8" />
      </SwiperSlide>
      </Swiper>
        </div>
        </Box>
  )
};

export default Banner;

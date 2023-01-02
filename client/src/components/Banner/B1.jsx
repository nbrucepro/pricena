import React, { useRef } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; 

SwiperCore.use([Pagination]);

const B1= () => {
  const swiperRefa = useRef(null);
  return (
    <> 
      <div className='pl5'>
      <Swiper
      modules={[Pagination]} 
      ref={swiperRefa}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>        
        <div className="imgsli2">
      <img src="../../../assets/samsung.png" alt="Slide 1" />
      </div>
        </SwiperSlide> 
      <SwiperSlide>        
        <div className="imgsli2">
      <img src="../../../assets/samsung.png" alt="Slide 2" />
      </div>
        </SwiperSlide>
      <SwiperSlide>        
        <div className="imgsli2">
      <img src="../../../assets/samsung.png" alt="Slide 1" />
      </div>
        </SwiperSlide>
      <SwiperSlide>        
        <div className="imgsli2">
      <img src="../../../assets/samsung.png" alt="Slide 2" />
      </div>
        </SwiperSlide>
        </Swiper>
        </div>
        </>
  )
}
export default B1;
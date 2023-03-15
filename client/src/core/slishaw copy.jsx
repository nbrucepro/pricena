import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slideshow = () => {
  return (
    <div id="appa">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="swiper-slide"
      >
        {/* <SwiperSlide > */}
        <div style={{ 'backgroundImage': `url("https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")` }}>
                <span >slideImagecaption</span>
        </div>
        {/* </SwiperSlide> */}
        <SwiperSlide >Slide 2</SwiperSlide>
        <SwiperSlide >Slide 3</SwiperSlide>
        <SwiperSlide >Slide 4</SwiperSlide>
        <SwiperSlide >Slide 5</SwiperSlide>
        <SwiperSlide >Slide 6</SwiperSlide>
        <SwiperSlide >Slide 7</SwiperSlide>
        <SwiperSlide >Slide 8</SwiperSlide>
        <SwiperSlide >Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slideshow;

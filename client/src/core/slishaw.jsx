import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper';
const Slideshow = () => {
  const slides = [
    {
      id: 1,
      imageUrl: '../../assets/sli1.jpg',
      title: 'Slide 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      imageUrl: '../../assets/sli2.jpg',
      title: 'Slide 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      imageUrl: '../../assets/sli4.jpg',
      title: 'Slide 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      // direction: 'horizontal',
      // loop: true,
      // slidesPerView: 'auto',
      spaceBetween: 20,
      // centeredSlides: true,
      // grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      modules:{Pagination}
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    });

    return () => {
      swiperRef.current.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map((slide) => (
          <div className="swiper-slide" key={slide.id}>
            <div  style={{ backgroundImage: `url(${slide.imageUrl})` }} />
            <img className="slide-image" src={`${slide.imageUrl}`} alt="any" />
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination" />
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </div>
  );
};

export default Slideshow;

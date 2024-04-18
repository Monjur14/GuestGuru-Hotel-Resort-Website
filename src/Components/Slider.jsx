import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/znfTjZ2/rktkn-ss-Oty-GE8-Cy-E-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/pP31CV3/roberto-nickson-MA82m-PIZe-GI-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/h96rMjv/cory-bjork-D1y-T791-Nf9-A-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/8DJJGwC/the-anam-jetn-F4-Xv4h8-unsplash.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
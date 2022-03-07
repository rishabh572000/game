import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "./SliderCard";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

import { Pagination } from "swiper";

export default function SliderSection() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
        <SwiperSlide><SliderCard /></SwiperSlide>
      </Swiper>
    </>
  );
}

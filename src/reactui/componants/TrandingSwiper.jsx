import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./tranding.css";
import { Pagination, Navigation } from "swiper";
import TrandingSwiperData from './TrandingSwiperData';

const TrandingSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper_one"
      >
      {TrandingSwiperData.map(user =>{
          return(
              <>
              <SwiperSlide key ={user.id} className='slider'>
                <div className="slider_content">
                    <div className="user_image">
                        <img src={user.img1} />
                    </div>
                    <div className="content">
                    <h3>{user.head}</h3>
                    <p>{user.para}</p>
                    </div>
                </div>
              </SwiperSlide>
              </>
          )

      })}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default TrandingSwiper;

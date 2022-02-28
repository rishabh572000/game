import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./resource.css";
import { Pagination, Navigation } from "swiper";
import ResourceApi from './ResourceApi';

const ResourceSwiper = () => {
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
        className="mySwiper2"
      >
      {ResourceApi.map(user =>{
          return(
              <>
              <SwiperSlide key ={user.id} className='slider'>
                <div className="slider_content">
                    <div className="user_image">
                        <img src={user.img} />
                    </div>
                    <div className="content">
                    <p>{user.para}</p>
                    </div>
                </div>
              </SwiperSlide>
              </>
          )

      })}
      </Swiper>
    </>
  );
}

export default ResourceSwiper;

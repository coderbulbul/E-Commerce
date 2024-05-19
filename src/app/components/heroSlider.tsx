"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-[20px]"
      >
        <SwiperSlide>
          <Image
            src="/slider-1.png"
            alt="slider"
            quality={80}
            height={500}
            width={700}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider-2.png"
            alt="slider"
            quality={80}
            height={500}
            width={700}
          ></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

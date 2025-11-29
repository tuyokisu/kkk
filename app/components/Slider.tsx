"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Songs } from "@/information";





export default function Slider() {
  const breakSetting = {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
  };

  return (
   
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={breakSetting}
        centeredSlides={true}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        pagination={{ el: "#pagination", clickable: true }}
      
      >
    
        {Songs.map((song) => {
          return (
 
            <SwiperSlide key={song.id} >
              <Image
                src={song.img}
                width={700}
                height={427}
                className="h-full w-full object-cover "
                alt=""
              />
              <p className="text-center">{song.title}</p>
            </SwiperSlide>
          
          );
        
        })}
      
      </Swiper>
    
  );
}
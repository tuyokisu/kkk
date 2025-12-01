"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Songs } from "@/information";
import Link from "next/link";


export default function Slider() {



  const breakSetting = {
    0: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 40,
    },
  };

  return (
    <>
<section id="musicVideo" >
   <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">MUSIC VIDEOS</h2>
  
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
              <div className="group relative overflow-hidden">

               <Link
                 href={song.url}
                 target="_blank"
              >
                
              <Image
                src={song.img}
                width={700}
                height={427}
                className="
                h-full w-full  gap-4 transition-all
                duration-500
                ease-in-out
                group-hover:grayscale
                group-hover:scale-105 "
                alt=""
              />
              
              </Link>

            </div>

            </SwiperSlide>
         
          
          );
        
        })}
      
      </Swiper>
 </section>
 </>

  );
}
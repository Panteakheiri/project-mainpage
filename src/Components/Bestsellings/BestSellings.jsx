import React from "react";
import data from "../LastestProducts/data";
import CardB from "./CardB";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";
// import Swiper and modules styles
import "swiper/css";
import "./BestSelling.css"

export default function BestSellings() {
  SwiperCore.use([Navigation]);
  return (
    <div className="w-full flex  items-center flex-col mt-32">
      <h1 className="text-4xl font-bold mr-[1120px]">Bestsellings</h1>
      <p className="mt-4 text-[20px] mr-[940px] text-gray-400  mb-10">
        Lorem ipsum dolor sit amet consectetur .
      </p>
      <div className="w-full max-w-[1340px] justify-center">
        <Swiper
          modules={[Navigation]}
          slidesPerGroup={1}
          slidesPerView={5}
          grabCursor={true}
          loop={true}
          navigation={{
            nextEl: ".arrow-swiper-button-next",
            prevEl: ".arrow-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="relative">
              <CardB name={item.name} img={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
         
        <div className='flex justify-center items-center w-full max-w-[1320px] mx-auto'>
       <div className='arrows-divs w-full flex justify-end'>
       <div className='arrow-next'><img src={arrow1} alt='left' className='arrow-swiper-button-next'/></div>
       <div className='arrow-prev'><img src={arrow2} alt='right' className='arrow-swiper-button-prev'/></div>
       </div>
       </div>
        
      </div>
    </div>
  );
}

import React from 'react'
import data from "../LastestProducts/data"
import CardB from "./CardB"
import arrowright from "../../assets/arrow1.png"
import arrowleft from "../../assets/arrow2.png"

// core version + navigation, pagination modules:
import {Swiper , SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from "swiper/core";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';


export default function BestSellings() {

  SwiperCore.use([Navigation]);
  return (
    <div className='w-full flex  items-center flex-col mt-32'>
      <h1 className='text-4xl font-bold mr-[1120px]'>Bestsellings</h1>
      <p className='mt-4 text-[20px] mr-[940px] text-gray-400  mb-10'>Lorem ipsum dolor sit amet consectetur .</p>
      <div className='w-full max-w-[1340px] flex justify-center' >
      <Swiper
            slidesPerGroup={1}
            slidesPerView={5}
            loop={true}
            grabCursor={true}
            navigation={{prevEl: '.prev' , nextEl:'.next'}}
            allowSlideNext={true}
            allowSlidePrev={true}
            breakpoints={{
              856 : {
                slidesPerView : 5
              },
              640 : {
                slidesPerView : 3
              },
              0 : {
                slidesPerView : 1
              }
            }}
            >
                {data.map((item) => (
                   <SwiperSlide key={item.id} className='relative'>
                    <CardB name={item.name} img={item.img}/>
                   </SwiperSlide>
                ))
                }
            </Swiper>
      </div>
    </div>
  )
}

import React from 'react'
import CardBlog from './CardBlog'

import dataBlog from './data.js'
// core version + navigation, pagination modules:
import {Swiper , SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from "swiper/core";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Blog() {
  return (
    <div className='w-full flex justify-center mt-24'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-4xl text-[#252429]'>Blog</h1>
        <p className='text-xl mt-2'>Read more on blog</p>
        <div  className='mt-6 flex w-full max-w-[1330px] justify-center  items-center mb-20 '>

        <Swiper
            slidesPerGroup={1}
            slidesPerView={4}
            loop={true}
            spaceBetween={10}
            className='swiper'
            grabCursor={true}
            
            allowSlideNext={true}
            allowSlidePrev={true}
            breakpoints={{
              856 : {
                slidesPerView : 4
              },
              640 : {
                slidesPerView : 3
              },
              0 : {
                slidesPerView : 1
              }
            }}
            >
                {dataBlog.map((item) => (
                   <SwiperSlide key={item.id} >
                    <CardBlog name={item.name} img={item.img}/>
                   </SwiperSlide>
                ))
                }
                
            </Swiper>
        
        </div>
      </div>
    </div>
  )
}
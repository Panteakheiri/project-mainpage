import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import left1 from "../../assets/left1.png"
import right1 from "../../assets/right1.png"
import "./SliderCarpet.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import SummerOff from './SummerOff';

export default () => {
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      className='mySwiper'
      grabCursor={true}
      loop={true}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled"
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><SummerOff/></SwiperSlide>
      <SwiperSlide><SummerOff/></SwiperSlide>
      <SwiperSlide><SummerOff/></SwiperSlide>
      <SwiperSlide><SummerOff/></SwiperSlide>
    </Swiper>
    <div className='flex justify-center items-center w-full max-w-[1320px] mx-auto'>
    <div className='arrows-div w-full flex justify-end mt-[-80px] mr-6'>
    <div className='swiper-next'><img src={left1} alt='left' className='image-swiper-button-next'/></div>
    <div className='swiper-prev'><img src={right1} alt='right' className='image-swiper-button-prev'/></div>
    </div>
    </div>
    
    </>
  );
};

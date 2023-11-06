import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from "../Components/Header/Header"

import AboutPersian from "../Components/AboutPersian/AboutPersian"
import BestSellings from "../Components/Bestsellings/BestSellings"
import Blog from "../Components/Blog/Blog"
import BoxIcon from "../Components/BoxIcon/BoxIcon"

import IranPhotos from "../Components/IranPhotos/IranPhotos"
import LastestProducts from "../Components/LastestProducts/LastestProducts"
import Offs from "../Components/Offs/Offs"
import SummerOff from "../Components/SummerOff/SummerOff"
import SliderCarpet from "../Components/SummerOff/SliderCarpet"

export default function MainPage() {
  return (
   <>
      <Header/>
      <BoxIcon/>
      <Offs/>
      <LastestProducts/>
      <SliderCarpet/>
      <BestSellings/>
      <IranPhotos/>
      <AboutPersian/>
      <BestSellings/>
      <Blog/>
      <Footer/>
     
    
   </>
  )
}

import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import {FiArrowRight} from 'react-icons/fi'

import logo from "../../assets/logo2.png"
import image1 from "../../assets/image18.svg"
import image2 from "../../assets/image19.svg"

export default function Footer() {
  return (
    <footer>
      <div>
        <div className='bg-footerimg w-full flex justify-center h-[365px]'>
          <div className='flex w-full max-w-[1330px] gap-[70px] items-center text-[18px] '>

            <div className='text-white text-[16px] flex-col w-[200px]'>
              <img src={logo} className='mt-10'/>
              <div>
                Amet minim mollit non 
                deserunt ullamco est sit 
                aliqua dolor do amet sint.
                Velit officia.
                <p className='mt-3 mb-3'>+1 994 556 4123</p>
              </div>
              <div className='flex gap-5 '>
                <AiFillInstagram size={35} className='text-white' />
                <BsYoutube size={35} className='text-white' />
                <BsLinkedin size={30} className='text-white rounded-lg' />


              </div>
            </div>


            <div className='text-white text-1xl w-[200px] leading-10'>
              <h1 className='font-bold text-2xl w-[200px]'>Quick Access</h1>
              <p>Gallery</p>
              <p>Category</p>
              <p>About</p>
            </div>


            <div className='text-white text-[18px] leading-10'>
              <h1 className='font-bold text-2xl w-[200px]'>Help Center</h1>

              <span>Login & Account<br />
                FAQ<br />
                Contact</span>
            </div>


            <div className='text-white text-[18px] leading-10'>
              <h1 className='font-bold text-2xl w-[240px]'>Payment ways</h1>
              <div className='flex-col'>
                <img src={image1} />
                <img src={image2} />
              </div>
            </div>


            <div className='text-white text-xl flex-col leading-10'>
              <div>
                <h1 className='font-bold text-2xl'>Subscribe for news</h1>
                <span>Join us to know news!</span>
              </div>

              <div className='relative'>
                <input className='w-[260px] h-[56px] text-2xl text-gray-300 p-4' placeholder='Email' />
                <div className='w-[40px] h-[40px] bg-[#08188F] flex items-center absolute top-2 left-52'>
                  <FiArrowRight size={30} className='ml-1'/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
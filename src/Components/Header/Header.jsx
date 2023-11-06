import React from 'react'
import { BsSearch, BsBasket } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import BottomHeader from './BottomHeader'
import logo from "../../assets/logo.png"

export default function Header() {
    return (
        <>
        <div className='bg-hero-pattern bg-no-repeat bg-center flex justify-center  bg-cover w-full h-[935px]'>

            <div className='text-black flex w-full justify-between h-24 max-w-[1330px] items-center'>
                <div className='mr-10'>
                    <img src={logo}/>
                </div>


                <div>
                <ul className='  hidden md:flex'>
                    <li className='p-4  md:hover:text-blue-800  duration-200  font-bold'>home</li>
                    <li className='p-4   md:hover:text-blue-800  duration-200  font-bold'>Gallery</li>
                    <li className='p-4   md:hover:text-blue-800  duration-200  font-bold'>Category</li>
                    <li className='p-4   md:hover:text-blue-800  duration-200  font-bold'>About</li>
                    <li className='p-4   md:hover:text-blue-800  duration-200  font-bold'>Contact</li>


                </ul>
                </div>

                <div className='flex items-center'>
                    <BsSearch size={25} className='m-3 md:hover:text-blue-800 duration-200' />
                    <span className='m-3 md:hover:text-blue-800  duration-200 text-[20px]'>EN</span>
                    <BsBasket size={25} className='m-3 md:hover:text-blue-800  duration-200' />
                    <AiOutlineUser size={25} className='m-3 md:hover:text-blue-800  duration-200' />


                </div>
            </div>

       
        </div>

           <BottomHeader/>
           </>
    )
}
import React from 'react'

import { TbCar } from 'react-icons/tb'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { PiUsersThree, PiAirplaneTiltBold } from 'react-icons/pi'
import { RiCoinsLine } from 'react-icons/ri'

export default function BoxIcon() {
  return (
    <div className='flex  gap-[24px] justify-center items-center mt-20 w-full'>
      <div>

        <div className='h-[280px] w-[312px] border-2 md:hover:bg-white border-neutral-300 flex-col justify-center items-center grid justify-items-center'>

          <div className='w-[100px] h-[100px] bg-white md:hover:bg-[#dedede] rounded-full
              items-center flex justify-center mt-3'>
            <TbCar size={45} className='font-bold text-blue-800' />
          </div>
          <h1 className='font-bold text-2xl'>Fast Sending</h1>

          <h5 className='text-gray-400 text-[12px] mt-[-30px]'>send your pack as soon as possible</h5>

        </div>
      </div>

      <div className='flex-col    '>

        <div className='h-[128px] w-[312px] border-2 md:hover:bg-white border-neutral-300  flex justify-center items-center  p-2'>

          <div className='w-[70px] h-[70px] bg-white rounded-full md:hover:bg-[#dedede] items-center flex justify-center '>
            <HiOutlineCurrencyDollar size={35} className='font-bold text-blue-800' />
          </div>


          <div className='flex-col items-start m-2'>
            <div>
              <h1 className='font-bold text-1xl '> 7-Days refund</h1>
            </div>
            <div>
              <h5 className='text-gray-400 text-[12px] '>send your pack as soon as possible</h5>
            </div>
          </div>
        </div>


        <div className='h-[128px] w-[312px] border-2 md:hover:bg-white border-neutral-300 flex justify-center items-center  p-2 mt-4'>

          <div className='w-[70px] h-[70px] bg-white md:hover:bg-[#dedede] rounded-full items-center flex justify-center '>
            <PiUsersThree size={35} className='font-bold text-blue-800' />
          </div>


          <div className='flex-col items-start m-2'>
            <div>
              <h1 className='font-bold text-1xl '> 24/7 support</h1>
            </div>
            <div>
              <h5 className='text-gray-400 text-[12px] '>Can contact always as you  want</h5>
            </div>
          </div>
        </div>
      </div>


      <div>

        <div className='h-[280px] w-[312px] border-2 border-neutral-300 flex-col justify-center items-center grid justify-items-center    md:hover:bg-white  duration-200'>

          <div className='w-[100px] h-[100px] bg-gray-100 md:hover:bg-[#dedede] rounded-full
      items-center flex justify-center mt-3'>
            <RiCoinsLine size={45} className='font-bold text-blue-800' />
          </div>
          <h1 className='font-bold text-2xl '>Crypto Payment</h1>

          <h5 className='text-gray-400 text-[12px] mt-[-30px]'>ability tp pay with CRYPTO currency</h5>

        </div>
      </div>


      <div>

        <div className='h-[280px] w-[312px] border-2 md:hover:bg-white border-neutral-300 flex-col justify-center items-center grid justify-items-center   duration-200'>

          <div className='w-[100px] h-[100px] bg-white md:hover:bg-[#dedede] rounded-full
            items-center flex justify-center mt-3'>
            <PiAirplaneTiltBold size={45} className='font-bold text-blue-800' />
          </div>
          <h1 className='font-bold text-[20px] '>International Shipping</h1>

          <h5 className='text-gray-400 text-[12px] mt-[-30px]'>send as soon as possible</h5>

        </div>
      </div>


    </div>
  )
}

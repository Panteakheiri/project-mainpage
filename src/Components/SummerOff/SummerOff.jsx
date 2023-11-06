import React from 'react'
import farsh from "../../assets/farash.png"
import goldnabi from "../../assets/goldnabi.png"
import Summer from "../../assets/summer.png"


export default function SummerOff() {

  return (
 
    
    <div className='flex justify-center items-center mx-10 relative'>

      <img className='w-[1320px] h-[408px]  bg-gradient-to-r from-purple-500 to-[#08188F]' src={Summer} />

      <div className='flex justify-between items-center absolute'>

        <div className='mr-[450px]'>
          <h1 className='text-white text-4xl ml-[100px]'>Don’t miss our <br />summer off</h1>
          <h2 className='text-white ml-[100px] mt-2'>Lorem Ipsum is simply <br />dummy text of the.</h2>
          <div className='w-[170px] h-[44px] bg-white flex justify-center items-center text-[20px] font-medium text-[#08188F] mt-5 ml-[100px]'>see them</div>
        </div>

        <div className='flex justify-center items-center  '>

          <img src={farsh} className=' ' />
          <img src={goldnabi} className='z-10  ml-[-220px]' />

        </div>
      </div>

    </div>




  )
}

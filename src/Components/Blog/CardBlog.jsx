import React from 'react'

export default function CardBlog({name, img}) {
  return (
    <div className='border-2 border-solid border-neutral-300 h-[312px] w-[312px]'>
        <img src={img}  className='w-[312px] h-[225px]'/>
        <h2 className='font-bold text-2xl text-[#252429] ml-3 mt-2'>{name}</h2>
        <span className='ml-3'>Lorem Ipsum is simply dummy text of the </span>
    </div>
  )
}
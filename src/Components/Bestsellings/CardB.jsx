import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

export default function Card({ name, img }) {
  return (
    <div className="w-[250px] h-[350px] flex-col border-[2px] border-neutral-300 p-6 ml-0">
      <div className="flex items-center justify-center">
        <img src={img} className="w-[207px] h-[207px]" />
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="flex-col">
          <span>for example</span>
          <h1 className="font-bold text-1xl">{name}</h1>
          <div className="flex  items-center">
            <AiFillStar className="text-amber-400" />
            <span>4.5</span>
          </div>
          <span className="font-bold">$299</span>
        </div>
        <div className="mb-3">
          <HiOutlineShoppingBag size={30} />
        </div>
      </div>
    </div>
  );
}
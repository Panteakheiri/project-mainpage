import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import persian from "../../assets/headerphotos/Persian.png";
import star from "../../assets/headerphotos/Union.png";

export default function BottomHeader() {
  return (
    <div className="flex items-center justify-center mt-[-110px] w-full">
      <div>
        <div className="flex items-center relative">
          <img src={persian} className="w-[960px] mt-10 mr-10" />
          <img src={star} className="absolute top-[305px] left-[410px]" />

          <div className="m-4 absolute top-[170px] left-[420px] mt-10">
            <h3 className="font-bold text-blue-800 ml-3 mb-[-10px] ">A little aboute us</h3>
            <p className="text-[#2e2d2f] text-[20px] ml-3 mt-4">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy.
               Lorem Ipsum is simply.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col mt-10">
        <div
          className=" flex justify-between items-center h-[148px] w-[312px]
             bg-[#08188F] text-left p-3 text-lg   text-white align-left"
        >
          <div className="underline font-normal text-[30px] ml-3">
            {" "}
            See them{" "}
          </div>
          <div className="underline text-[30px] mr-3 mt-3">
            <FiArrowUpRight />
          </div>
        </div>

        <div
          className=" flex justify-between items-center h-[148px] w-[312px]
             bg-[#BE7C4D] text-left p-3 text-lg   text-black align-left"
        >
          <div className="underline text-[30px] ml-3"> about us </div>
          <div className="underline text-[30px] mr-3 mt-3">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}
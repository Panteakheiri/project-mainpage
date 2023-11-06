import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import farsh1 from "../../assets/farsh1.jpg"
import farsh2 from "../../assets/farsh2.jpg"

export default function AboutPersian() {
  return (
    <div className="flex justify-center items-center mx-10 mt-24 relative">
      <div className="flex-col">
        <div className="flex justify-between items-center">
          <div>
            <h1 className=" text-7xl font-bold mb-5 text-[#252429] ">
              Read about persian <br />
              souvenirs!!
            </h1>
          </div>
          <div
            className="w-[290px] h-[148px] bg-[#08188F] z-10  text-white text-2xl absolute ml-[400px]
          underline flex justify-center items-center mt-[180px]"
          >
            Join and Read <div className="ml-2 mt-2"><FiArrowUpRight /></div>
          </div>
          <div>
            <p className="text-2xl text-[#252429] w-[540px]">
              Lorem Ipsum is simply dummy text of the 
              printing. Lorem Ipsum is simply dummy text of
              the Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry....
            </p>
          </div>
        </div>
        <div className="flex ">
          <div>
            <img src={farsh1} className="w-[760px] h-[360px]" />
          </div>

          <div>
            <img
              src={farsh2}
              className="w-[537px] h-[360px] ml-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

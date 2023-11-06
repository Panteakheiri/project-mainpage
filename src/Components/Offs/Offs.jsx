import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import img1 from "../../assets/lastproducts/1.png";
import img2 from "../../assets/lastproducts/2.png";
import rectangle from "../../assets/Rec.png";
import shah from "../../assets/Shah.png";
import rightArrow from "../../assets/svg-right.svg";
import Clock from "./countdown.jsx";

export default function Offs() {
  return (
    <div className="my-[90px] w-full h-[536px] flex justify-center items-center">
      {/* left */}
      <div className="flex-col">
        {/* top one */}
        <div className="h-[256px] w-[300px] border-2 drop-shadow-sm bg-white ml-2 mb-[24px]">
          <div className="flex-col">
            <div className=" flex ml-[190px] ">
              <div className=" w-[40px] h-[40px] bg-white border-2 mr-2 flex items-end justify-center ">
                <BsBookmarkFill
                  size={14}
                  className="font-bold text-blue-800 mb-2"
                />
              </div>
              <div className=" w-[40px] h-[40px] bg-blue-800 text-white flex items-end justify-center mr-6 ">
                <span className="mb-2 font-bold text-[10px]">25%</span>
              </div>
            </div>
            <div className="w-[37px] h-[15px] border-2 ml-[190px] mt-1 flex items-center p-2 font-bold text-[8px]">
              1day
            </div>
          </div>

          <div className="flex ml-5 items-center ">
            <div className="bg-gray-200 h-[200px] absolute top-[30px]">
              <img src={img1} className="w-[119px] h-[119px] mt-[68px] " />
            </div>
            <div className="flex-col z-10 ml-[140px] mt-[60px]">
              <h1 className="font-bold text-2xl ">Green jar</h1>
              <p className=" ml-1">$ 299</p>
              <div className="flex items-center justify-center ml-6 mt-6">
                <p className="ml-[20px] mt-[10px] text-[12px] text-gray-500 font-semibold">
                  buy Now
                </p>
                <img src={rightArrow} className="w-[17px] ml-2 mt-[12px] " />
              </div>
            </div>
          </div>
        </div>
        {/* bottom one*/}
        <div className="h-[256px] w-[300px] border-2 drop-shadow-sm bg-white ml-2 flex">
          <div>
            <div className="w-[40px] h-[40px] bg-white border-2 ml-6 flex items-end justify-center">
              <p className="mb-2 font-extrabold text-[10px] text-blue-800">
                15%
              </p>
            </div>
            <div className="flex-col mt-14 ml-6">
              <h1 className="font-bold text-2xl ">Flower vase</h1>
              <p>$ 299</p>
            </div>
            <div className="flex items-center justify-center ml-14 mt-10">
              <p className="ml-[20px] mt-[10px] text-[12px] text-gray-500 font-semibold">
                buy Now{" "}
              </p>
              <img
                src={rightArrow}
                className="w-[17px] ml-2 mt-[12px] text-gray-500"
              />
            </div>
          </div>

          <div>
            <img src={img2} className="w-[149px] h-[149px] absolute mt-20 " />
          </div>
        </div>
      </div>

      {/* middle*/}
      <div className="w-[648px] h-[536px] border-solid border-2 ml-[24px] flex bg-white">
        <div>
          <img src={rectangle} className="w-[269px] h-[490px] ml-5 mt-5" />
        </div>

        <div>
          <div className="w-[50px] h-[50px] bg-white border-2 ml-[250px]  flex justify-center">
            <p className="mx-1 text-[13px] text-blue-800">
              UP to{" "}
              <span className="font-bold text-blue-800 text-[15px]">30%</span>
            </p>
          </div>

          <div className="ml-6 mt-10">
            <p className="text-blue-800 font-bold ">Best of the week</p>
            <p className="w-[320px] text-[32px] font-bold justify-normal">
              Our colorful bowls are on discount this weekend!
            </p>
            <div className="flex">
              <p className="text-gray-400 line-through"> $ 299 </p>
              <span className="text-black ml-3 font-bold">$ 199</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between w-[320px] font-semibold text-[14px] ml-4 mt-16">
              <p>Avalible: 7</p>
              <p>Already sold: 18</p>
            </div>
            <div className="w-[320px] h-[10px] border-2 border-solid border-gray-300 mt-4 ml-4"></div>
            <div className="w-[120px] h-[10px] bg-blue-800 mt-[-10px] ml-4"></div>
            <Clock />
            <div className="flex items-center ml-[20px] mt-4">
              <p className=" mt-[10px] text-[12px] text-gray-500 font-semibold">
                Dont't Miss Discount
              </p>
              <img src={rightArrow} className="w-[17px] ml-2 mt-[12px] " />
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div>
        <div className="flex flex-col">
          <img src={shah} className="ml-[24px] " />
          <div className="w-[260px] h-[270px] bg-white z-20 mt-[-270px] ml-12">
            <div className="mt-6 mx-5 text-center">
              <p className="text-[23px] font-extrabold ">
                UP TO <span className="bg-blue-800 text-white p-[1px]">50%</span> OFF
              </p>
              <p className="text-2xl mt-2 ">Every  Weekends</p>
              <p className="text-left mt-5 w-[200px] ml-5">
                You Can Shop On Weekend With Discounts Between 15 to 50 percent.
              </p>
              <div className="flex items-center">
              <p className="text-gray-500 underline text-[14px] mt-3 ml-4 ">set an alarm to be notified</p>
              <img src={rightArrow} className="w-[17px] ml-2 mt-[12px] " />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

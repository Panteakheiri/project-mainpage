import React from "react";

export default function IranPhotos() {
  return (
    <div className="mx-10 mt-24 flex justify-center items-center relative">
      <div className="flex">
        <div className="flex-col ">
          <div className="bg-yazd  w-[536px] h-[284px] mb-6 flex justify-center items-center">
            <div className="bg-[#08188F] h-5 w-[180px] text-white  text-2xl ml-[10px] relative "></div>
            <div className="text-white  text-2xl absolute z-10 top-[119px]">
              The Name, Yazd
            </div>
          </div>
          <div className="bg-gambroon  w-[536px] h-[193px] flex justify-center items-center ">
            <div className="bg-[#08188F] h-5 w-[260px] text-white  text-2xl relative ">
              <div className="bg-[#08188F] h-5 w-[260px] text-white text-2xl "></div>
              <div className="text-white text-2xl w-[260px] absolute bottom-[3px] left-1">
                from south, Gambroon
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[187px] h-[188px] rounded-full z-10 border-2 absolute bg-white flex justify-center items-center  text-2xl ml-[460px] mt-[200px]">
         
          Beautiful Iran
        </div>
        <div className="bg-shiraz  w-[759px] h-[501px] ml-8 flex justify-center items-center">
          <div className="bg-[#08188F] h-5 w-[350px] text-white text-2xl relative ">
          </div>
          <div className="text-white text-2xl absolute top-[227px]">The Name, Of the House Shiraz</div>
        </div>
      </div>
    </div>
  );
}

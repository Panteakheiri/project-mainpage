import React, { useState } from "react";
import Card from "./Card";
import data from "./data.js";

export default function LastestProducts() {
  console.log(data);

  return (
    <div className="w-full flex justify-center items-center flex-col  mb-[100px]">
      <h1 className="font-bold mr-[1070px] text-3xl ">Lastest Products</h1>
      <div className="flex w-full max-w-[1330px] items-center justify-between mx-auto">
        <div >
          <p className="ml-4">lorem lpusm is simply dummy text</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[75px] h-[35px] border-2 border-neutral-300 md:hover:bg-blue-800 md:hover:text-white flex items-center justify-center p-5 m-6">
            <span>Reverse</span>{" "}
          </div>
          <div className="w-[75px] h-[30px] border-2 border-neutral-300 md:hover:bg-blue-800 md:hover:text-white flex items-center justify-center p-5 m-4">
            {" "}
            Hero
          </div>
          <div className="w-[75px] h-[30px] border-2 border-neutral-300 flex md:hover:bg-blue-800 md:hover:text-white items-center justify-center p-5 m-4 ">
            {" "}
            in
          </div>
          <div className="w-[110px] h-[30px] border-2 border-neutral-300 flex md:hover:bg-blue-800 md:hover:text-white items-center justify-center p-5 m-4">
            {" "}
            Categories
          </div>
          <div className="w-[75px] h-[30px] border-2 border-neutral-300 flex md:hover:bg-blue-800 md:hover:text-white items-center justify-center p-5 m-4">
            {" "}
            Are
          </div>
          <div className="w-[75px] h-[30px] border-2 border-neutral-300 md:hover:bg-blue-800 md:hover:text-white flex items-center justify-center p-5 m-4">
            {" "}
            They
          </div>
        </div>
      </div>

      <div className="mt-5 justify-center items-center grid grid-cols-5 w-full max-w-[1330px] ">
        {data.map((item) => (
          <Card key={item.id} img={item.img} name={item.name} />
        ))}
      </div>
    </div>
  );
}

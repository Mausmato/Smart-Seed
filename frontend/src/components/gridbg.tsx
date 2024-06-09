import React from "react";
import "../../src/index.css";
import Navbar from "../components/navbar";
import { CustomBentoGrid } from "../components/ourbento";

export function GridBackground() {
  return (
    <div className="absolute top-0 left-0 h-[100rem] w-full dark:bg-[#f9f9f9] bg-[#f9f9f9] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col items-center justify-top">
      <Navbar />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#f9f9f9] bg-[#f9f9f9] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="pt-24 text-6xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#A2A620] via-[#81C169] via-[#32B94E] to-[#22C55D] py-8">
        Dashboard
      </p>
      <p className="text-2xl text-center mt-4 max-w-[50rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestias
        id voluptatibus accusamus ipsa iusto in.
      </p>
      <div className="w-[90%] mt-8">
        <CustomBentoGrid />
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="hover:shadow-2xl border-green-700 border-2 rounded-xl px-8 py-16 max-w-4xl text-center bg-white shadow">
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#20a639] via-[#2f870f] via-[#32B94E] to-[#22C55D] py-8">
            Recommendations
          </h1>
          <p className="text-xl mt-4">
            1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            molestias
            <br />
            2) Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            molestias id voluptatibus accusamus ipsa iusto in.
          </p>
        </div>
      </div>
    </div>
  );
}

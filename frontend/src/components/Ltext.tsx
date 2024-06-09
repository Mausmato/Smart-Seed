import React, { useState } from "react";
import "../../src/index.css";
import Navbar from "../components/navbar";
import InputFileUpload from "../components/lgbutton";

export function GridBackground2() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

  return (
    <div className="!absolute top-0 left-0 h-screen w-full dark:bg-[#f9f9f9] bg-[#f9f9f9] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col justify-top">
      <Navbar />
      <div className="!absolute left-0 pointer-events-none inset-0 flex place-items-start justify-start dark:bg-[#f9f9f9] bg-[#f9f9f9] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="!justify-start items-start pt-72 pl-9 text-5xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#A2A620] via-[#81C169] via-[#32B94E] to-[#22C55D] py-5">
        Plant and Play
      </p>
      <p className="!pl-9 text-xl text-left max-w-[46%] font-semibold text-neutral-800">
        Turn on your camera of choice to take a picture of your plant! Make sure
        it's nice and close! Please drag and drop your image into the box on the
        right!
      </p>
      <div className=" flex justify-end pr-36 translate-y-[-130px]">
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="max-w-xs max-h-xs border border-solid border-red p-4"
          />
        ) : (
          <InputFileUpload onImageUpload={handleImageUpload} />
        )}
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";
import "../../src/index.css";
import Navbar from "../components/navbar";
import InputFileUpload from "../components/lgbutton";
import { PredictionData } from "../../types";  // Import the PredictionData interface
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";  
import ShimmerButton from "../components/shimmer";


export function GridBackground2() {
  const [data, setData] = useState<PredictionData>({});
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const navigator = useNavigate();
  // const isMounted = useRef(true);

  // useEffect(() => {
  //   return () => {
  //     // Set isMounted to false when component unmounts
  //     isMounted.current = false;
  //   };
  // }, []);
  if (Object.keys(data).length){
    navigator("/dash", { state: data});
  }

  useEffect(() => {
  if (uploadedImage !== "") {
    fetch(
      "http://127.0.0.1:5000/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        }
        ,body: JSON.stringify({
          image: uploadedImage,
        }),
      }
    )
    .then(response => response.json()).then((prediction: PredictionData) => {
      setData(prediction);
    })
    .catch((error) => {console.log(error);});
    return
  }
  console.log("here", data) 
  }, [uploadedImage]);
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
      <div className="z-10 flex min-h-[8rem] items-center justify-center">
        <Link to="/dash">
          <ShimmerButton className="!bg-[#4FC461] shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Head to Dashboard!
            </span>
          </ShimmerButton>
        </Link>
      </div>{" "}
    </div>
  );
}

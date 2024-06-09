import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import DropImage from "../components/DropImage";
import MoistureLevels from "../components/MoistureLevels";
import SoilNutrients from "../components/SoilNutrients";
import Logo from "../components/logo";
import { BackgroundGradientAnimation } from "../components/bg";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import ShimmerButton from "../components/shimmer";
import { motion } from "framer-motion"; // Import motion from framer-motion


const Home: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [moisture, setMoisture] = useState<number>(0);
  const [nutrients, setNutrients] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const handleImageUpload = (uploadedImage: File) => {
    setImage(URL.createObjectURL(uploadedImage));

    // Mock data
    setMoisture(30);
    setNutrients(["Potassium: 20ppm", "Nitrate: 15ppm"]);
    setRecommendations(["Buy potassium product", "Water 2 times per day"]);
  };

  useEffect(() => {
    // Scroll to 100% of the page height when the component mounts
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    
    <div className="relative">
      <BackgroundGradientAnimation className="absolute inset-0 z-10">
        <div>
          <Navbar />
        </div>
        <div>
          <Header />
          {/* 
  // Component for uploading images with a callback function handleImageUpload
  <DropImage onImageUpload={handleImageUpload} />

  // Display the uploaded image if available
  {image && <img src={image} alt="Uploaded" className="mx-auto mt-4" />}

  // Component for displaying moisture levels with the moisture prop
  <MoistureLevels moisture={moisture} />

  // Component for displaying soil nutrients with the nutrients prop
  <SoilNutrients nutrients={nutrients} />
*/}
        </div>
        <div className="z-10 flex min-h-[8rem] items-center justify-center">
          <Link to="/dash">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Get Started &#8594;
              </span>
            </ShimmerButton>
          </Link>
        </div>{" "}
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Home;

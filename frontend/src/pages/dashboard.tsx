import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import DropImage from "../components/DropImage";
import MoistureLevels from "../components/MoistureLevels";
import SoilNutrients from "../components/SoilNutrients";
import Logo from "../components/logo";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import ShimmerButton from "../components/shimmer";
import {GridBackground} from "../components/gridbg";

const Home: React.FC = () => {

  return (
    <div className="relative">
      <GridBackground>
        
      </GridBackground>

    </div>
  );
};

export default Home;

import { cn } from "../../lib/utils";
import React from "react";

import "../../src/index.css";

import { BentoGrid, BentoGridItem } from "../components/bento";

export const CustomBentoGrid = () => {
  return (
    <BentoGrid className="p-8 h-screen relative">
      <div className="w-full">
        <BentoGridItem
          className="bg-custom-gradient text-white w-full"
          title={<div className="text-5xl">240%</div>}
          description={<div>Moisture Levels</div>}
          icon={<div className="icon-placeholder" />}
        />
      </div>
      <div className="w-full h-[148.797px] grid grid-cols-2 gap-4">
        <BentoGridItem
          className="bg-white text-black w-full h-[200.797px]"
          title={<div className="text-5xl  text-neutral-900">99%</div>}
          description={<div className=" text-neutral-800">Nutrient 1</div>}
          icon={<div className="icon-placeholder" />}
        />
        <BentoGridItem
          className="bg-white text-black w-full h-[200.797px]"
          title={<div className="text-5xl text-neutral-900">32%</div>}
          description={<div className=" text-neutral-800">Nutrient 2</div>}
          icon={<div className="icon-placeholder" />}
        />
        <div className="col-span-2 h-[225.797px]">
          <BentoGridItem
            className="bg-white text-black w-full h-[234px]"
            title={<div className="text-5xl text-neutral-900">60%</div>}
            description={<div className=" text-neutral-800">Nutrient 3</div>}
            icon={<div className="icon-placeholder" />}
          />
        </div>
      </div>
    </BentoGrid>
  );
};

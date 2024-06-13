
import "../../src/index.css";

import { BentoGrid, BentoGridItem } from "../components/bento";
import { PredictionData } from "types";

export const CustomBentoGrid = ({ data }: { data?: PredictionData }) => {
  return (
    <BentoGrid className="p-8 h-screen relative">
      <div className="w-full">
        <BentoGridItem
      title={
        <div className="text-green-600 w-full">
          {data?.class_probabilities['Healthy'] || 1}%
        </div>
      }
      description={<div className="text-bold text-green-600 text-5xl">Overall Health</div>}
      icon={<div className="icon-placeholder" />}
        />
      </div>
      <div className="w-full h-[148.797px] grid grid-cols-2 gap-4">
        <BentoGridItem
          className="bg-white text-black w-full h-[200.797px]"
          title={
            <div className="text-5xl  text-neutral-900">
              {data?.class_probabilities['P_Deficency'] || 1}%
            </div>
          }
          description={<div className=" text-neutral-800">Potassium Deficiency</div>}
          icon={<div className="icon-placeholder" />}
        />
        <BentoGridItem
          className="bg-white text-black w-full h-[200.797px]"
          title={
            <div className="text-5xl text-neutral-900">
              {data?.class_probabilities['K_Deficiency'] || 1}%
            </div>
          }
          description={<div className=" text-neutral-800">Nitrogen Deficiency</div>}
          icon={<div className="icon-placeholder" />}
        />
        <div className="col-span-2 h-[225.797px]">
          <BentoGridItem
            className="bg-white text-black w-full h-[234px]"
            title={
              <div className="text-5xl text-neutral-900">
                {data?.class_probabilities['N_Deficiency'] || 1}%
              </div>
            }
            description={<div className=" text-neutral-800">Phosphosrus Deficiency</div>}
            icon={<div className="icon-placeholder" />}
          />
        </div>
      </div>
    </BentoGrid>
  );
};

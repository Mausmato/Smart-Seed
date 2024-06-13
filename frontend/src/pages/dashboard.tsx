import React, { useState } from "react";
import { motion } from "framer-motion";
import { GridBackground } from "../components/gridbg";
import ImageUploader from "../components/ImageUploader";
import { PredictionData } from "../../types"; // Import the PredictionData interface
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation()
  let predictionData: PredictionData | null = location?.state
  return (
    <div className="relative">
      <GridBackground  data={predictionData}/>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ImageUploader setPredictionData={setPredictionData} />
      </motion.div> */}
      {predictionData && Object.keys(predictionData).length && (
        <div className="results-container">
          <h2>Predicted Class: {predictionData?.predicted_class}</h2>
          {/* <ul>
            {Object.entries(predictionData?.class_probabilities).map(
              ([key, value]) => (
                <li key={key}>
                  {key}: {value.toFixed(4)}
                </li>
              )
            )}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default Home;

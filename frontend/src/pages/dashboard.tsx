import React, { useState } from "react";
import { GridBackground } from "../components/gridbg";
import ImageUploader from "../components/ImageUploader";
import { PredictionData } from "../../types"; // Import the PredictionData interface

const Home: React.FC = () => {
  const [predictionData, setPredictionData] = useState<PredictionData | null>(
    null
  );

  return (
    <div className="relative">
      <GridBackground predictionData={predictionData} />
      <ImageUploader setPredictionData={setPredictionData} />
      {predictionData && (
        <div className="results-container">
          <h2>Predicted Class: {predictionData.predicted_class}</h2>
          <ul>
            {Object.entries(predictionData.class_probabilities).map(
              ([key, value]) => (
                <li key={key}>
                  {key}: {value.toFixed(4)}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;

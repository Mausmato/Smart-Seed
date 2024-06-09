import React from 'react';

interface SoilNutrientsProps {
  nutrients: string[];
}

const SoilNutrients: React.FC<SoilNutrientsProps> = ({ nutrients }) => {
  return (
    <div>
      <h2>Soil Nutrients</h2>
      <ul>
        {nutrients.map((nutrient, index) => (
          <li key={index}>{nutrient}</li>
        ))}
      </ul>
    </div>
  );
};

export default SoilNutrients;

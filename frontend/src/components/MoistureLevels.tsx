import React from 'react';

interface MoistureLevelsProps {
  moisture: number;
}

const MoistureLevels: React.FC<MoistureLevelsProps> = ({ moisture }) => {
  return (
    <div>
      <h2>Overall Plant Health</h2>
      <p>{moisture} ppm</p>
    </div>
  );
};

export default MoistureLevels;

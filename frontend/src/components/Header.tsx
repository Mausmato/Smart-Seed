import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="pb-4 pt-64 z-10 text-8xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 bg-opacity-40">
        SmartSeed
      </h1>
      <p className="text-center pt-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 bg-opacity-40">
        The Grass is Greener on our Side
        <br />
        
      </p>
    </header>
  );
};

export default Header;

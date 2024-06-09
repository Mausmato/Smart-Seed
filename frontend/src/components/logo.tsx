import React from "react";
import logo from "../assets/logo.png"; // Import the image

const Logo: React.FC = () => {
  return (
    <div
      className="absolute top-0 left-0 pl-4"
      style={{ width: "120px", height: "80px", overflow: "hidden" }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "120px",
          height: "120px",
          transform: "translateY(-53px)",
        }}
      />
    </div>
  );
};

export default Logo;

import React from "react";
import { PredictionData } from "../../types";  // Import the PredictionData interface


const VisuallyHiddenInput = {
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
};

export default function InputFileUpload({ onImageUpload }) {
  function arrayBufferToBase64(buffer: ArrayBuffer): string {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(arrayBufferToBase64(reader.result! as ArrayBuffer));
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <label
        style={{
          display: "inline-block",
          cursor: "pointer",
          padding: "20px 40px",
          fontSize: "24px",
          backgroundColor: "#428339",
          color: "#fff",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        <svg
          style={{
            fontSize: "36px",
            verticalAlign: "middle",
            marginRight: "10px",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5z" />
        </svg>
        Upload
        <input
          type="file"
          style={VisuallyHiddenInput}
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
}

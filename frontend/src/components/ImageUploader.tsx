import React, { useState } from "react";
import axios from "axios";
import { PredictionData } from "../../types";  // Import the PredictionData interface


interface ImageUploaderProps {
  setPredictionData: (data: PredictionData) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ setPredictionData }) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = async () => {
        const base64String = reader.result?.toString().split(",")[1];

        if (base64String) {
          try {
            const response = await axios.post<PredictionData>(
              "http://127.0.0.1:5000/predict",
              {
                image: base64String,
              }
            );
            setPredictionData(response.data);
          } catch (error) {
            console.error("Error uploading image:", error);
          }
        }
      };
    }
  };

  return (
    <div className="image-uploader">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload and Predict</button>
    </div>
  );
};

export default ImageUploader;

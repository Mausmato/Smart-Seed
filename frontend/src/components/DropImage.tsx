import React, { ChangeEvent } from 'react';

interface DropImageProps {
  onImageUpload: (image: File) => void;
}

const DropImage: React.FC<DropImageProps> = ({ onImageUpload }) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
  };

  return (
    <div className="z-10">
      <label htmlFor="imageUpload">Drop Image</label>
      <input type="file" id="imageUpload" onChange={handleImageChange} />
    </div>
  );
};

export default DropImage;

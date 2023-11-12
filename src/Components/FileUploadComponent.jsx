import React, { useState } from 'react';
import ImageUploadComponent from './ImageUploadComponent';

const FileUploadComponent = () => {
  const [image, setImage] = useState(null);
  // console.log(image)

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer.files];
    // Assuming only one file is dropped
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      // Store the image in the state
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        width: 300,
        height: 200,
        border: '2px dashed #ccc',
        textAlign: 'center',
        lineHeight: '200px',
        cursor: 'pointer',
      }}
    >
      {image ? <img src={image} alt="dropped" style={{ maxWidth: '100%', maxHeight: '100%' }} /> : <ImageUploadComponent/>
      }
    </div>
  );
};

export default FileUploadComponent;

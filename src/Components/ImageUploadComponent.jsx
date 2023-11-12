import React, { useState } from 'react';
import FileUploadComponent from './FileUploadComponent';

const ImageUploadComponent = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      // Convert the image to a base64 string
      const base64String = reader.result;
      setImage(base64String);
      // Store the base64 string in local storage
      localStorage.setItem('image', base64String);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="imageUpload" style={{ cursor: 'pointer' }} >
        {image ? <img src={image} alt="uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} /> : 'Add Image'}
      </label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      ></input>
      
    </div>
  );
};

export default ImageUploadComponent;

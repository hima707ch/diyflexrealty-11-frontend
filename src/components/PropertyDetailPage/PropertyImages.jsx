import React, { useState } from 'react';
import images from '../assets/images';

const PropertyImages = ({ images: propertyImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="PropertyImages_1" className="relative w-full h-[500px] mb-8">
      <img
        id="PropertyImages_2"
        src={propertyImages[currentIndex]}
        alt={`Property image ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-lg"
      />
      <button
        id="PropertyImages_3"
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ←
      </button>
      <button
        id="PropertyImages_4"
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        →
      </button>
      <div id="PropertyImages_5" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {propertyImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;

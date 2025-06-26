import React from 'react';
import images from '../assets/images';

const PropertyDetails = ({ property }) => {
  return (
    <div id="PropertyDetails_1" className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h1 id="PropertyDetails_2" className="text-3xl font-bold mb-4">{property.title}</h1>
      <div id="PropertyDetails_3" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="PropertyDetails_4" className="space-y-4">
          <div id="PropertyDetails_5" className="flex items-center">
            <span className="font-semibold w-32">Price:</span>
            <span>${property.price?.toLocaleString()}</span>
          </div>
          <div id="PropertyDetails_6" className="flex items-center">
            <span className="font-semibold w-32">Location:</span>
            <span>{property.location}</span>
          </div>
          <div id="PropertyDetails_7" className="flex items-center">
            <span className="font-semibold w-32">Type:</span>
            <span>{property.type}</span>
          </div>
          <div id="PropertyDetails_8" className="flex items-center">
            <span className="font-semibold w-32">Size:</span>
            <span>{property.size} sq ft</span>
          </div>
        </div>
        <div id="PropertyDetails_9" className="space-y-4">
          <h2 id="PropertyDetails_10" className="text-xl font-semibold">Description</h2>
          <p id="PropertyDetails_11" className="text-gray-600">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

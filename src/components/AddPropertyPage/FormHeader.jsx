import React from 'react';
import images from '../assets/images';

const FormHeader = () => {
  return (
    <div className="text-center mb-8" id="FormHeader_1">
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900" id="FormHeader_2">
        Add New Property
      </h2>
      <p className="mt-2 text-sm text-gray-600" id="FormHeader_3">
        Fill in the details below to list a new property
      </p>
    </div>
  );
};

export default FormHeader;
import React from 'react';
import PropertyForm from './PropertyForm';
import FormHeader from './FormHeader';
import images from '../assets/images';
import { useAddProperty } from './useAddProperty';

const Body = () => {
  const { handleSubmit, isLoading, error } = useAddProperty();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-3xl mx-auto" id="Body_2">
        <FormHeader />
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md" id="Body_3">
            {error}
          </div>
        )}
        <PropertyForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Body;
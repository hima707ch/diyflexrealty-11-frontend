import React from 'react';
import EditPropertyForm from './EditPropertyForm';
import images from '../assets/images';
import { useEditProperty } from './useEditProperty';

const Body = () => {
  const { property, handleUpdateProperty, loading, error } = useEditProperty();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_4" className="max-w-3xl mx-auto">
        <h1 id="Body_5" className="text-3xl font-bold text-gray-900 mb-8 text-center">Edit Property</h1>
        <EditPropertyForm property={property} onSubmit={handleUpdateProperty} />
      </div>
    </div>
  );
};

export default Body;
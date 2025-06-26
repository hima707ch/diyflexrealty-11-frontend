import React from 'react';
import PropertyFilter from './PropertyFilter';
import PropertyList from './PropertyList';
import images from '../assets/images';
import usePropertyPage from './usePropertyPage';

const Body = () => {
  const { properties, filters, loading, error, handleFilterChange, currentPage, handlePageChange } = usePropertyPage();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold text-gray-800 mb-8">Find Your Dream Property</h1>
      <PropertyFilter filters={filters} onFilterChange={handleFilterChange} />
      {error && <div id="Body_3" className="text-red-500 mb-4">{error}</div>}
      {loading ? (
        <div id="Body_4" className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <PropertyList 
          properties={properties}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Body;
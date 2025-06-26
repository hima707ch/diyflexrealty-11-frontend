import React from 'react';
import images from '../assets/images';

const PropertyFilter = ({ filters, onFilterChange }) => {
  return (
    <div id="PropertyFilter_1" className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div id="PropertyFilter_2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          id="PropertyFilter_3"
          type="text"
          placeholder="Location"
          className="border rounded-md p-2"
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
        />
        <input
          id="PropertyFilter_4"
          type="number"
          placeholder="Min Price"
          className="border rounded-md p-2"
          value={filters.minPrice}
          onChange={(e) => onFilterChange('minPrice', e.target.value)}
        />
        <input
          id="PropertyFilter_5"
          type="number"
          placeholder="Max Price"
          className="border rounded-md p-2"
          value={filters.maxPrice}
          onChange={(e) => onFilterChange('maxPrice', e.target.value)}
        />
        <select
          id="PropertyFilter_6"
          className="border rounded-md p-2"
          value={filters.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
        >
          <option value="">All Types</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
      </div>
    </div>
  );
};

export default PropertyFilter;
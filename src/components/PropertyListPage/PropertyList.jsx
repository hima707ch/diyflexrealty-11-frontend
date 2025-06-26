import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties, currentPage, onPageChange }) => {
  const itemsPerPage = 9;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  return (
    <div id="PropertyList_1">
      <div id="PropertyList_2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((property, index) => (
          <div key={property.id} id={`PropertyList_${index + 3}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={images[index % images.length] || 'https://via.placeholder.com/300x200'}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
              <p className="text-gray-600 mt-2">{property.location}</p>
              <p className="text-blue-600 font-bold mt-2">${property.price.toLocaleString()}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{property.type}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div id="PropertyList_12" className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => onPageChange(i + 1)}
              className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
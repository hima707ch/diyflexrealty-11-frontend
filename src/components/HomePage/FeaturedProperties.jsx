import React from 'react';
import images from '../assets/images';

const FeaturedProperties = ({ properties }) => {
  return (
    <section className="py-16 bg-gray-50" id="FeaturedProperties_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={images[item] || 'https://example.com/property.jpg'} alt="Property" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Villa {item}</h3>
                <p className="text-gray-600 mb-4">Beautiful property with modern amenities</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-900 font-bold">$599,000</span>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
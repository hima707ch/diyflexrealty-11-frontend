import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white" id="AboutUs_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-2">
              <img src={images[1] || 'https://example.com/team.jpg'} alt="Our Team" className="rounded-lg object-cover shadow-xl" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-900 w-32 h-32 rounded-full z-0 opacity-20"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted Real Estate Partner</h2>
            <p className="text-lg text-gray-600 mb-8">With over 20 years of experience in the real estate market, we've helped thousands of families find their perfect home. Our commitment to excellence and customer satisfaction sets us apart.</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">2000+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">500+</h3>
                <p className="text-gray-600">Properties Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
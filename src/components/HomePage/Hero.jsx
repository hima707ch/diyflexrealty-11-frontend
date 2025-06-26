import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M37.5,-48.2C45.9,-40.8,48.2,-25.9,51.3,-11.2C54.4,3.6,58.3,18.1,53.6,29.5C48.9,40.9,35.6,49.2,21.6,53.9C7.6,58.6,-7,59.7,-19.8,55.1C-32.6,50.5,-43.5,40.2,-48.9,27.8C-54.3,15.4,-54.2,0.8,-50.7,-12.5C-47.2,-25.8,-40.3,-37.8,-30.2,-44.9C-20.1,-51.9,-7,-54,4.9,-59.6C16.8,-65.2,33.6,-74.4,37.5,-48.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Find Your Perfect</span>
              <span className="block animate-bounce bg-white text-blue-900 mt-2 px-2 inline-block rounded">Home</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Discover exceptional properties tailored to your lifestyle. Let us guide you to your dream home with our expert real estate services.</p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Browse Properties</a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="relative">
            <img src={images[0] || 'https://example.com/house.jpg'} alt="Modern home" className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';
import Hero from './Hero';
import AboutUs from './Aboutus';
import CallToAction from './CallToAction';
import FeaturedProperties from './FeaturedProperties';
import Footer from './Footer';
import { useHome } from './useHome';

const Body = () => {
  const { properties } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <AboutUs />
      <FeaturedProperties properties={properties} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;
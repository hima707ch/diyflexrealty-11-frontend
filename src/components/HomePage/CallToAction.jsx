import React from 'react';
import images from '../assets/images';

const CallToAction = () => {
  return (
    <section className="bg-blue-900 py-16" id="CallToAction_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Connect with our experts today and take the first step towards your perfect property.</p>
          <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
import React from 'react';
import useRegistration from './useRegistration';
import images from '../assets/images';

const RegistrationForm = () => {
  const {
    formData,
    errors,
    isLoading,
    handleChange,
    handleSubmit
  } = useRegistration();

  return (
    <form id="RegistrationForm_1" onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div id="RegistrationForm_2" className="rounded-md shadow-sm space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="RegistrationForm_3"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
            placeholder="Full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="RegistrationForm_4"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
            placeholder="Email address"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="RegistrationForm_5"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
            placeholder="Password"
          />
          {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
        </div>
      </div>

      <div>
        <button
          id="RegistrationForm_6"
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Creating account...' : 'Sign up'}
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
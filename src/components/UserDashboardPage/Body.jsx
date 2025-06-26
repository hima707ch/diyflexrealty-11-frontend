import React from 'react';
import UserProfile from './UserProfile';
import UserListings from './UserListings';
import images from '../assets/images';
import { useUserDashboard } from './useUserDashboard';

const Body = () => {
  const { user } = useUserDashboard();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 py-8">
      <div id="Body_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 id="Body_3" className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        <div id="Body_4" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div id="Body_5" className="lg:col-span-4">
            <UserProfile user={user} />
          </div>
          <div id="Body_6" className="lg:col-span-8">
            <UserListings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
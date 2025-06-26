import React from 'react';
import images from '../assets/images';

const UserProfile = ({ user }) => {
  return (
    <div id="UserProfile_1" className="bg-white rounded-lg shadow p-6">
      <div id="UserProfile_2" className="flex items-center space-x-4 mb-6">
        <img
          id="UserProfile_3"
          src={images[0]}
          alt="Profile"
          className="h-16 w-16 rounded-full"
        />
        <div id="UserProfile_4">
          <h2 id="UserProfile_5" className="text-xl font-semibold text-gray-900">
            {user?.name || 'John Doe'}
          </h2>
          <p id="UserProfile_6" className="text-gray-500">
            {user?.email || 'john@example.com'}
          </p>
        </div>
      </div>
      <div id="UserProfile_7" className="space-y-4">
        <div id="UserProfile_8" className="border-t pt-4">
          <h3 id="UserProfile_9" className="text-lg font-medium mb-2">Account Details</h3>
          <div id="UserProfile_10" className="space-y-2">
            <p id="UserProfile_11" className="text-sm text-gray-600">Member since: {user?.joinDate || 'January 2023'}</p>
            <p id="UserProfile_12" className="text-sm text-gray-600">Total Listings: {user?.totalListings || '5'}</p>
            <p id="UserProfile_13" className="text-sm text-gray-600">Account Status: {user?.status || 'Active'}</p>
          </div>
        </div>
        <button
          id="UserProfile_14"
          className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
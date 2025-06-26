import React from 'react';
import images from '../assets/images';
import { useUserListings } from './useUserListings';

const UserListings = () => {
  const { listings, handleDeleteListing, handleEditListing } = useUserListings();

  return (
    <div id="UserListings_1" className="bg-white rounded-lg shadow">
      <div id="UserListings_2" className="p-6 border-b">
        <div id="UserListings_3" className="flex justify-between items-center">
          <h2 id="UserListings_4" className="text-xl font-semibold">My Listings</h2>
          <button
            id="UserListings_5"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add New Listing
          </button>
        </div>
      </div>
      <div id="UserListings_6" className="divide-y divide-gray-200">
        {listings.map((listing) => (
          <div id={`UserListings_7_${listing.id}`} key={listing.id} className="p-6">
            <div id="UserListings_8" className="flex space-x-4">
              <img
                id="UserListings_9"
                src={listing.image || images[1]}
                alt={listing.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div id="UserListings_10" className="flex-1">
                <h3 id="UserListings_11" className="text-lg font-medium">{listing.title}</h3>
                <p id="UserListings_12" className="text-gray-600">${listing.price}</p>
                <p id="UserListings_13" className="text-sm text-gray-500">{listing.location}</p>
                <div id="UserListings_14" className="mt-2 flex space-x-2">
                  <button
                    onClick={() => handleEditListing(listing.id)}
                    id="UserListings_15"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteListing(listing.id)}
                    id="UserListings_16"
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div id="UserListings_17" className="flex items-center">
                <span
                  id="UserListings_18"
                  className={`px-2 py-1 rounded-full text-xs ${listing.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                >
                  {listing.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListings;
import { useState, useEffect } from 'react';

export const useUserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      joinDate: 'January 2023',
      totalListings: 5,
      status: 'Active'
    };
    setUser(mockUser);
  }, []);

  return { user };
};
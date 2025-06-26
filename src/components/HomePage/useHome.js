import { useState, useEffect } from 'react';

export const useHome = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties/search');
        const data = await response.json();
        if (response.ok) {
          setProperties(data);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return { properties };
};
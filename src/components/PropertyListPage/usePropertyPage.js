import { useState, useEffect } from 'react';

const usePropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        ...filters,
        minPrice: filters.minPrice || undefined,
        maxPrice: filters.maxPrice || undefined
      }).toString();

      const response = await fetch(`/api/properties/search?${queryParams}`);
      if (!response.ok) throw new Error('Failed to fetch properties');
      
      const data = await response.json();
      setProperties(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    properties,
    filters,
    loading,
    error,
    handleFilterChange,
    currentPage,
    handlePageChange
  };
};

export default usePropertyPage;
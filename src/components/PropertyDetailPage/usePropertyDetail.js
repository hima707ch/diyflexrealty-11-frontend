import { useState, useEffect } from 'react';

const usePropertyDetail = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const propertyId = new URLSearchParams(window.location.search).get('id');
        const response = await fetch(`/api/properties/${propertyId}`);
        if (!response.ok) throw new Error('Failed to fetch property details');
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, []);

  const handleInquirySubmit = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send inquiry');
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      alert(err.message);
    }
  };

  return { property, loading, error, handleInquirySubmit };
};

export default usePropertyDetail;

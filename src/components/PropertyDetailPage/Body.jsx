import React from 'react';
import PropertyImages from './PropertyImages';
import PropertyDetails from './PropertyDetails';
import InquiryForm from './InquiryForm';
import usePropertyDetail from './usePropertyDetail';
import images from '../assets/images';

const Body = () => {
  const { property, loading, error, handleInquirySubmit } = usePropertyDetail();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center min-h-screen">{error}</div>;
  if (!property) return null;

  return (
    <div id="Body_3" className="max-w-7xl mx-auto px-4 py-8">
      <PropertyImages images={property.images || images} />
      <PropertyDetails property={property} />
      <InquiryForm onSubmit={handleInquirySubmit} propertyId={property.id} />
    </div>
  );
};

export default Body;

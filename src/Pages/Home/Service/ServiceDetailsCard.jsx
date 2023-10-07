import React from 'react';

const ServiceDetailsCard = ({ serviceDetails }) => {
  const { serviceName, image, price, description, id, longDescription } =
    serviceDetails || {};
  console.log(serviceDetails);
  return (
    <div className="w-full mx-auto">
      <img className="w-full h-[70vh]  " src={image} alt="" />
      <h2 className="text-2xl font-semibold text-left">{serviceName}</h2>
      <h3>{longDescription}</h3>
    </div>
  );
};

export default ServiceDetailsCard;

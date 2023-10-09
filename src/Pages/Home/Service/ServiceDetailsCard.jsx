import React from 'react';

const ServiceDetailsCard = ({ serviceDetails }) => {
  const { serviceName, image, price, description, id, longDescription } =
    serviceDetails || {};
  console.log(serviceDetails);
  return (
    <div className="w-11/12 mx-auto grid  md:grid-cols-2 grid-cols-1  items-center gap-5 ">
      <img className="w-full h-[70vh]  " src={image} alt="" />
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">{serviceName}</h2>
        <h3>{longDescription}</h3>
        <button className="btn bg-stone-500 text-white">Booking Now</button>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;

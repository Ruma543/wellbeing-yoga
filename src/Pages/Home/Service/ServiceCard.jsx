import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { serviceName, image, price, description, id } = service || {};
  // console.log(service);
  return (
    <div className=" mb-5">
      <div className=" shadow-lg bg-white px-6 py-9 rounded-lg">
        <img className="h-56" src={image} alt="" />
        <h3 className="lg:text-xl text-lg h-10 font-semibold my-2 ">
          {serviceName}
        </h3>
        <p className="text-sm text-stone-600 lg:h-20 h-20  flex items-center">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Price:{price}</p>
          <Link to={`/services/${id}`}>
            <button className="px-4 py-3 rounded-lg bg-stone-700 hover:bg-stone-800 text-white">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

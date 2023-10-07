import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { serviceName, image, price, description, id } = service || {};
  console.log(service);
  return (
    <div className="">
      <div className=" shadow-lg  px-6 py-9 ">
        <img className="" src={image} alt="" />
        <h3 className="text-xl font-semibold">{serviceName}</h3>
        <p className="text-sm text-stone-600 h-20 flex items-center">
          {description}
        </p>
        <p className="text-xl font-semibold">Price:{price}</p>
        <Link to={`/services/${id}`}>
          <button className="btn bg-stone-700 text-white">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

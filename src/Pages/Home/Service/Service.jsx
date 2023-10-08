import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';

const Service = () => {
  const { services } = useContext(AuthContext);
  // console.log(services);
  return (
    <div>
      <h3 className="text-3xl text-center font-semibold font-serif my-4">
        Our Services
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 bg-stone-200 px-5 py-5">
        {services.map(service => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;

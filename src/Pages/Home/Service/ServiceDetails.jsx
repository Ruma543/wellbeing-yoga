import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ServiceDetailsCard from './ServiceDetailsCard';

const ServiceDetails = () => {
  const { services } = useContext(AuthContext);
  const [serviceDetails, setServiceDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const findService = services && services?.find(item => item.id == id);
    setServiceDetails(findService);
    console.log(findService);
  }, [id, services]);
  // console.log(services);
  return (
    <div>
      <Navbar></Navbar>
      <ServiceDetailsCard serviceDetails={serviceDetails}></ServiceDetailsCard>
    </div>
  );
};

export default ServiceDetails;

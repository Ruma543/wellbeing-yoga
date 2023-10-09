import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ClientCard from './ClientCard';
import clientImg from '../../../assets/about.jpg';

const Client = () => {
  const clients = useLoaderData();
  console.log(clients);
  const clientStyle = {
    backgroundImage: `url(${clientImg})`,
    backgroundSize: 'cover',
    height: '80vh',
  };
  return (
    <div className=" bg-stone-300 lg:h-[80vh] my-6 ">
      <h3 className="lg:text-3xl  text-xl text-center font-semibold py-5 font-serif">
        What Our Clients Say About Us
      </h3>

      <div className="flex items-center"></div>
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 p-5 gap-6">
        {clients.map(client => (
          <ClientCard key={client.id} client={client}></ClientCard>
        ))}
      </div>
    </div>
  );
};

export default Client;

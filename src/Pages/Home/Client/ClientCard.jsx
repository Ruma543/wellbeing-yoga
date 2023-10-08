import React from 'react';
import quatation from '../../../assets/qutation.png';

const ClientCard = ({ client }) => {
  console.log(client);
  const { client_name, feedback, client_image } = client;
  return (
    <div className="flex flex-col justify-center items-center px-5 py-5 rounded-lg  bg-white">
      <img className="w-20 h-20 rounded-full" src={client_image} alt="" />
      <h3 className="font-semibold text-xl">{client_name}</h3>
      <div>
        <img className="w-4" src={quatation} alt="" />
        <p className=" text-sm text-stone-600">{feedback}</p>
      </div>
    </div>
  );
};

export default ClientCard;

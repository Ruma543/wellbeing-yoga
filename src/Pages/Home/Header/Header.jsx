import React from 'react';
import logo from '../../../assets/logo-120.png';

const Header = () => {
  return (
    <div className=" w-1/3 mx-auto flex justify-center flex-col ">
      <img className="w-20 mx-auto m-b-3" src={logo} alt="" />
      <h3 className="text-3xl font-bold">Wellbeing Yoga</h3>
      <p className="text-sm italic text-stone-400">
        Body, Mind & Spirit Balance
      </p>
    </div>
  );
};

export default Header;

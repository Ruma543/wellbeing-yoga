import React from 'react';
import logo from '../../../assets/logo-120.png';

const Welcome = () => {
  return (
    <div className="w-3/5 mx-auto my-8 ">
      <div className="flex justify-center gap-4 mb-4 ">
        <span className="text-stone-400 text-2xl font-semibold font-serif">
          W
        </span>
        <span className="text-stone-400 text-2xl font-semibold font-serif">
          E
        </span>
        <span className="text-stone-400 text-2xl font-semibold font-serif">
          L
        </span>
        <span className="text-stone-400 text-2xl font-semibold font-serif">
          C
        </span>
        <span className="text-stone-400 text-2xl font-semibold font-serif">
          M
        </span>
        <span className="text-stone-400 text-2xl font-semibold font-serif">
          E
        </span>
      </div>
      <h2 className="text-4xl font-semibold text-black font-serif mb-2">
        Naturally Effective Health Solutions
      </h2>
      <p className="mb-4 text-stone-400">
        Welcome to visit our yoga where every woman, children & Men is treated
        with high attention.
      </p>
      <div className="flex justify-center items-center w-3/5 mx-auto ">
        <hr className="w-4/12 " />
        <img className="w-1/5 mx-auto" src={logo} alt="" />
        <hr className="w-4/12 " />
      </div>
    </div>
  );
};

export default Welcome;

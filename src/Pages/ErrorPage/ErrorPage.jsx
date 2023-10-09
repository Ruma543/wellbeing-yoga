import React from 'react';
import error from '../../assets/error.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className=" lg:w-2/3 mx-auto py-6 ">
      <img className="w-1/3 mx-auto" src={error} alt="" />
      <h3 className="text-2xl font-bold text-center">404 -PAGE NOT FOUND</h3>
      <p className="text-stone-700 my-3 text-center">
        This page You are looking for might have been removed had its name
        changed or temporarily unavailable.
      </p>
      <div className="lg:w-1/5 w-2/5 md:w-1/5 mx-auto">
        <Link className=" text-center" to="/">
          <button className="bg-red-500 px-4 py-3  rounded-lg text-white ">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

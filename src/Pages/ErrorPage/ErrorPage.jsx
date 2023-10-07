import React from 'react';
import error from '../../assets/error.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="">
      <img className="w-1/3 mx-auto" src={error} alt="" />
      <h3 className="text-2xl font-bold">404 -PAGE NOT FOUND</h3>
      <p className="text-stone-700 my-3">
        This page You are looking for might have been removed had its name
        changed or temporarily unavailable.
      </p>
      <Link className="" to="/">
        <button className="btn btn-error">Go to Homepage</button>
      </Link>
    </div>
  );
};

export default ErrorPage;

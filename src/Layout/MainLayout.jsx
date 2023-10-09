import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';

const MainLayout = () => {
  return (
    <>
      <div className="sticky top-0   z-50   w-full mx-auto  ">
        <Navbar></Navbar>
      </div>
      <div>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default MainLayout;

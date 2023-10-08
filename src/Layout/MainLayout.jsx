import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full mx-auto  ">
        <Navbar></Navbar>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

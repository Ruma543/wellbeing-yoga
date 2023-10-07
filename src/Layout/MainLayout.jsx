import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full mx-auto px-15 ">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

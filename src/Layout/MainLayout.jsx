import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full mx-auto  ">
        <Navbar></Navbar>
      </div>
      <div className="mb-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

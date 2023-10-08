import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import Welcome from './Welcome/Welcome';
import Footer from './Footer/Footer';
import Client from './Client/Client';

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      {/* <div className="sticky">
        <Navbar></Navbar>
      </div> */}
      <Banner></Banner>
      <Welcome></Welcome>
      <Service></Service>
      <Client></Client>
      {/* <div className=" bottom-0  right-0 left-0 w-full  ">
        <Footer></Footer>
      </div> */}
    </div>
  );
};

export default Home;

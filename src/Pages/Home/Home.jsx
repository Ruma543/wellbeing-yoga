import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import Welcome from './Welcome/Welcome';

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <Welcome></Welcome>
      <Service></Service>
    </div>
  );
};

export default Home;

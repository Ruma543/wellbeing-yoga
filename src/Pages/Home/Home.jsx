import React from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import Welcome from './Welcome/Welcome';
import Client from './Client/Client';
import Upcoming from './Upcoming/Upcoming';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Banner></Banner>
        <Welcome></Welcome>
        <Service></Service>
        <Client></Client>
        <Upcoming></Upcoming>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

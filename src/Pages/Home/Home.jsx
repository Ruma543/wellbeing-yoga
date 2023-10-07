import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import Welcome from './Welcome/Welcome';
import Footer from './Footer/Footer';

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
      <Footer></Footer>
    </div>
  );
};

export default Home;

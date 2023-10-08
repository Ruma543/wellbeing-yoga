import React from 'react';
import logo from '../../../assets/logo-120.png';
import { FcHome, FcPhone } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <header className=" flex items-center gap-3">
          <img
            className="lg:w-16 lg:h-16 w-10 mx-auto m-b-3"
            src={logo}
            alt=""
          />
          <div>
            <h3 className="lg:text-xl md:text-xl font-semibold text-white font-serif">
              Wellbeing Yoga
            </h3>
            <p className="lg:text-sm text-xm italic text-stone-400">
              Body, Mind & Spirit Balance
            </p>
          </div>
        </header>
        <p className="flex lg:items-center text-left lg:text-sm  text-xm gap-2 text-stone-100">
          <span>
            <FcHome></FcHome>
          </span>
          <span>176 W street name, Dhaka, Bangladesh</span>
        </p>
        <p className="flex  lg:text-sm text-left text-xm lg:items-center  gap-2 text-stone-100">
          <span>
            <AiOutlineMail></AiOutlineMail>
          </span>
          <span>Email: info@wellbeing.yoga.com</span>
        </p>
        <p className="flex lg:items-center text-left lg:text-sm text-xm  gap-2 text-stone-100">
          <span>
            <FcPhone></FcPhone>
          </span>
          <span> Telephone: +0088123-4566</span>
        </p>
      </nav>
      <nav>
        <header className="">
          <h3 className="lg:text-xl text-lg font-serif font-semibold text-white mb-4">
            Reservation Now
          </h3>
        </header>
        <button className="px-3 py-3 rounded-lg hover:bg-stone-800 bg-stone-600 text-white">
          Book Now
        </button>
      </nav>
      <nav>
        <header className="">
          <h2 className="lg:text-xl text-lg font-serif font-semibold text-white mb-4">
            Follow Us
          </h2>
        </header>
        <div className="flex items-center justify-center gap-4">
          <span className="text-white text-2xl">
            <BsFacebook></BsFacebook>
          </span>
          <span className="text-white text-2xl">
            <BsInstagram></BsInstagram>
          </span>
          <span className="text-white text-2xl">
            <BsTwitter></BsTwitter>
          </span>
        </div>
        <input
          className="w-full rounded-lg px-5 py-2 my-3 outline-none"
          type="text"
          placeholder="Enter your email...."
        />
        <button className="px-3 py-3 rounded-lg hover:bg-stone-800 bg-stone-600 text-white">
          Subscribe
        </button>
      </nav>
    </footer>
  );
};

export default Footer;

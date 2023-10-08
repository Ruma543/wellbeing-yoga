import React from 'react';
import logo from '../../../assets/logo-120.png';
import { FcHome, FcPhone } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className=" footer">
      <div className=" grid lg:grid-cols-3 grid-cols-1 bg-stone-800 px-7 py-7 ">
        <div className="px-4 py-5 w-full">
          <div className="flex justify-evenly items-center w-4/5 mx-auto">
            <img className="w-16 h-16 mx-auto m-b-3" src={logo} alt="" />
            <div>
              <h3 className="text-2xl font-semibold text-white font-serif">
                Wellbeing Yoga
              </h3>
              <p className="text-sm italic text-stone-400">
                Body, Mind & Spirit Balance
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="flex items-center  gap-2 text-stone-100">
              <span>
                <FcHome></FcHome>
              </span>
              <span>176 W street name, Dhaka, Bangladesh</span>
            </p>
            <p className="flex items-center  gap-2 text-stone-100">
              <span>
                <AiOutlineMail></AiOutlineMail>
              </span>
              <span>Email: info@wellbeing.yoga.com</span>
            </p>
            <p className="flex items-center  gap-2 text-stone-100">
              <span>
                <FcPhone></FcPhone>
              </span>
              <span> Telephone: +0088123-4566</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-5 w-11/12">
          <h3 className="text-xl font-serif font-semibold text-white mb-4">
            Book A Treatment Or Join Our Classes!
          </h3>
          <button className="btn bg-stone-600 text-white">Book Now</button>
        </div>
        <div className="px-4 py-5 w-11/12">
          <h2 className="text-xl font-serif font-semibold text-white mb-4">
            follow Us
          </h2>
          <div className="flex justify-center gap-4 items-center ">
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
          <button className="btn bg-stone-600 text-white">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect } from 'react';
import contactImg from '../../assets/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FcHome, FcPhone } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Contact = () => {
  const contactStyle = {
    backgroundImage: `url(${contactImg})`,
    backgroundSize: 'cover',
    height: '70vh',
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={contactStyle}>
      <div className="flex flex-col lg:w-2/3 w-full mx-auto items-center h-full m p-8">
        <h3
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:text-3xl text-xl font-semibold  font-serif"
        >
          Yoga, Bodywork & Movement
        </h3>
        <p
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-stone-700 lg:text-xl text-sm"
        >
          Yoga is the journey of the self, through the self, to the self.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 w-11/12 mx-auto grid-cols-1 my-6 lg:py-10 lg:px-10">
        <div>
          <h3 className=" text-left text-2xl font-semibold font-serif mb-4">
            Contact Info
          </h3>
          <hr className="w-full text-black" />
          <div className="my-5 ">
            <p className="flex items-center  gap-2">
              <span>
                <FcHome></FcHome>
              </span>
              <span>176 W street name, Dhaka, Bangladesh</span>
            </p>
            <p className="flex items-center  gap-2">
              <span>
                <AiOutlineMail></AiOutlineMail>
              </span>
              <span>Email: info@wellbeing.yoga.com</span>
            </p>
            <p className="flex items-center  gap-2">
              <span>
                <FcPhone></FcPhone>
              </span>
              <span> Telephone: +0088123-4566</span>
            </p>
          </div>
          <div>
            <h2 className=" text-left text-2xl font-semibold font-serif mb-5">
              Stay Social
            </h2>
            <hr className="w-full text-black" />
            <div className="flex justify-center gap-6 items-center mt-5 ">
              <span className=" text-2xl">
                <BsFacebook></BsFacebook>
              </span>
              <span className=" text-2xl">
                <BsInstagram></BsInstagram>
              </span>
              <span className=" text-2xl">
                <BsTwitter></BsTwitter>
              </span>
            </div>
          </div>
        </div>
        <div>
          <form className="flex flex-col space-y-5">
            <input
              className="border-orange-300 px-4 w-2/3  py-2 bg-gray-200 mr-5"
              type="text"
              placeholder="name"
            />
            <input
              className="border-orange-300 px-4 w-2/3 py-2 bg-gray-200 mr-5"
              type="email"
              placeholder="email"
            />
            <input
              className="border-orange-300 px-4 w-2/3 py-2 bg-gray-200 mr-5"
              type="text"
              placeholder="Subject"
            />

            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-lg bg-gray-200 my-5 "
              rows="4"
              placeholder="Enter your message..."
            ></textarea>
            <button className="px-4 py-3 rounded-lg bg-stone-600 hover:bg-stone-800 w-1/3 text-white ">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

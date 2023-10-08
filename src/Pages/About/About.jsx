import React from 'react';
import aboutimg from '../../assets/4.jpg';
import { FcHome, FcPhone } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const About = () => {
  return (
    <div>
      <div>
        <img src={aboutimg} alt="" />
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-2xl font-serif text-left mb-3">
            Our Vision
          </h3>
          <p className="text-left">
            At <span className="font-bold">Wellbeing Yoga</span>, we believe
            that yoga is a transformative journey that leads to holistic
            well-being. Our vision is to create a haven where individuals can
            embark on this journey, discover their inner potential, and
            cultivate a harmonious balance of body, mind, and spirit.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl font-serif text-left mb-3">
            Our Mission
          </h3>
          <p className="text-left">
            Our mission is to provide a nurturing and inclusive environment
            where people of all ages, backgrounds, and fitness levels can
            explore the profound benefits of yoga. We are committed to:
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 ">
          <div className="bg-white shadow-lg rounded-lg px-5 py-5">
            <h3 className="font-semibold text-2xl font-serif text-left mb-3">
              1. Authentic Yoga Practice
            </h3>
            <p className="text-left">
              We offer a diverse range of yoga styles, from Hatha to Vinyasa,
              and specialize in providing authentic teachings that honor the
              ancient traditions of yoga. Our experienced instructors are
              dedicated to guiding students through a safe and enriching
              practice.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg px-5 py-5">
            <h3 className="font-semibold text-2xl font-serif text-left mb-3">
              2. Community Building
            </h3>
            <p className="text-left">
              We strive to foster a sense of belonging and unity within our yoga
              community. Whether you're a beginner or an advanced practitioner,
              you'll find a welcoming space to connect with like-minded
              individuals who share your passion for yoga.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg px-5 py-5">
            <h3 className="font-semibold text-2xl font-serif text-left mb-3">
              3. Personal Growth
            </h3>
            <p className="text-left">
              Yoga is not just a physical practice; it's a journey of
              self-discovery. We provide resources and support to help you
              develop physically, mentally, and spiritually. Our classes and
              workshops are designed to inspire personal growth and empower you
              to live a more conscious and mindful life.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg px-5 py-5">
            <h3 className="font-semibold text-2xl font-serif text-left mb-3">
              4. Wellness and Healing
            </h3>
            <p className="text-left">
              We believe in the healing power of yoga. Our center offers
              specialized classes and workshops that address specific health
              concerns, such as stress reduction, anxiety management, and
              physical rehabilitation. We aim to be a source of solace and
              rejuvenation for those seeking a path to wellness.
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-2xl font-serif text-left mb-3">
            Our Instructors
          </h3>
          <p className="text-left">
            Our dedicated team of certified yoga instructors brings a wealth of
            knowledge and passion to every class. They are committed to guiding
            you on your yoga journey and helping you achieve your personal
            goals.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
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
          </div>
          <div>
            <h2 className=" text-left text-2xl font-semibold font-serif mb-5">
              Stay Social
            </h2>
            <hr className="w-full text-black" />
            <div className="flex justify-start gap-6 items-center mt-5 ">
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
      </div>
    </div>
  );
};

export default About;

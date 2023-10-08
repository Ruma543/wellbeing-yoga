import React, { useEffect } from 'react';
import img1 from '../../../assets/yoga1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    height: '80vh',
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="banner  " style={bannerStyle}>
      <div className=" h-full w-full lg:w-2/5 mx-auto items-center justify-center flex flex-col py-6">
        <h3
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:text-4xl text-2xl font-serif font-semibold"
        >
          Join Our Wellbeing Yoga
        </h3>

        <p
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:text-xl text-sm"
        >
          Yoga means addition – addition of energy, strength and beauty to body,
          mind and soul.
        </p>
        <button
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="btn btn-neutral my-5"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Banner;

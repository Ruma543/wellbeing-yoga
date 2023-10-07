import React, { useEffect } from 'react';
import img1 from '../../../assets/yoga1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    height: '70vh',
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="banner " style={bannerStyle}>
      <div className="grid grid-cols-2 items-center">
        <div></div>
        <div className=" h-56 items-center flex flex-col py-6">
          <div>
            <h3
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-4xl font-serif font-semibold"
            >
              Join Our Wellbeing Yoga
            </h3>
          </div>

          <p
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-xl"
          >
            Yoga means addition – addition of energy, strength and beauty to
            body, mind and soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

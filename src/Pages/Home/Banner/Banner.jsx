import React from 'react';
import img1 from '../../../assets/yoga1.jpg';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    height: '70vh',
  };
  return (
    <div className="banner " style={bannerStyle}>
      <div className="grid grid-cols-2 items-center">
        <div></div>
        <div className=" h-56 items-center flex flex-col py-6">
          <h3 className="text-4xl font-serif font-semibold">
            Join Our Wellbeing Yoga
          </h3>
          <p className="text-xl">
            Yoga means addition – addition of energy, strength and beauty to
            body, mind and soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

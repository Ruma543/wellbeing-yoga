import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UpcomingCard = ({ upcomingS }) => {
  // console.log(upcomingS);
  const { category, image, upcoming_services } = upcomingS;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="lg:relative">
        <img className="h-56 w-full lg:rounded-lg" src={image} alt="" />
        <div className="lg:absolute bottom-0 left-0 bg-slate-400 px-4 py-5">
          <h3 className="text-left text-2xl font-semibold font-serif">
            {category}
          </h3>
          <ul className="text-left">
            <li className="text-sm font-semibold">
              1.{upcoming_services.service_name1}
            </li>
            <li className="text-sm font-semibold">
              2.{upcoming_services.service_name2}
            </li>
            <li className="text-sm font-semibold">
              3.{upcoming_services.service_name3}
            </li>
          </ul>
          <button className=" my-3 lg:w-full bg-stone-600 hover:bg-stone-800 text-white px-3 py-2 rounded-lg">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;

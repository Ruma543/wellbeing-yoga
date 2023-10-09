import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import upcomingImg from '../../assets/mat.jpg';
import EventsCard from './EventsCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Events = () => {
  const events = useLoaderData();
  const eventsStyle = {
    backgroundImage: `url(${upcomingImg})`,
    backgroundSize: 'cover',
    height: '80vh',
  };
  useEffect(() => {
    AOS.init();
  }, []);
  // console.log(events);
  return (
    <div className="">
      <div
        className=" lg:h-[70vh] mx-auto w-full  px-5 flex items-center  flex-col justify-center"
        style={eventsStyle}
      >
        <h3
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:text-4xl text-2xl text-black font-serif font-semibold "
        >
          Events at the Wellbeing Yoga
        </h3>
        <p
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:text-stone-700 text-black lg:w-2/5 text-center w-full  mx-auto font-serif"
        >
          If you fall over, you fall over. If you have to stop, you stop. But
          you start again. Just like life itself, you start again.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-6">
        {events.map(event => (
          <EventsCard key={event.id} event={event}></EventsCard>
        ))}
      </div>
    </div>
  );
};

export default Events;

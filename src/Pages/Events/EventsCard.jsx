import React from 'react';
import { Link } from 'react-router-dom';

const EventsCard = ({ event }) => {
  const { title, image, details, organizer, venue, date } = event;
  // console.log(event);
  return (
    <div className=" mx-auto px-5 py-5  shadow-lg rounded-lg space-y-4">
      <div className="relative ">
        <img className="w-full h-56 rounded-lg  mx-auto" src={image} alt="" />
        <button className="  absolute btn btn-primary  text-white top-0 left-0  bg-stone-700 h-16 w-16 rounded-full">
          {date}
        </button>
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold font-serif text-left">{title}</h3>
        <p className="font-serif text-left text-sm h-15">
          {details.slice(0, 100)}
          <Link className="text-blue-700"> Read More....</Link>
        </p>

        <h3 className="text-sm  font-serif text-left">
          <span className="font-semibold"> Organizer: </span>
          {organizer}
        </h3>
        <h3 className="text-sm  font-serif text-left">
          <span className="font-semibold"> Venue:</span> {venue}
        </h3>
      </div>
    </div>
  );
};

export default EventsCard;

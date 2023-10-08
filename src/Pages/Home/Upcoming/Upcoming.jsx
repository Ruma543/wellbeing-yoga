import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UpcomingCard from './UpcomingCard';

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    fetch('/upcoming.json')
      .then(res => res.json())
      .then(data => setUpcoming(data));
  }, []);
  return (
    <div className="mb-10">
      <h3 className="lg:text-3xl text-xl font-semibold font-serif mb-6">
        Our Upcoming Services
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {upcoming.map(upcomingS => (
          <UpcomingCard key={upcomingS.id} upcomingS={upcomingS}></UpcomingCard>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;

import React from "react";
import Card from './Card';

const weekData = [
  {
    id: 0,
    title: 'Work',
    hours: 32,
    previousHours: 'Last Week - 32hrs',
    backgroundColor: 'hsl(15, 100%, 70%)'
  },
  {
    id: 1,
    title: 'Play',
    hours: 10,
    previousHours: 'Last Week - 12hrs',
    backgroundColor: 'hsl(195, 74%, 62%)'
  },
  {
    id: 2,
    title: 'Study',
    hours: 14,
    previousHours: 'Last Week - 16hrs',
    backgroundColor: 'hsl(348, 100%, 68%)'
  },

  {
    id: 3,
    title: 'Exercise',
    hours: 14,
    previousHours: 'Last Week - 15hrs',
    backgroundColor: 'hsl(145, 58%, 55%)'
  },
  {
    id: 4,
    title: 'Social',
    hours: 15,
    previousHours: 'Last Week - 14hrs',
    backgroundColor: 'hsl(264, 64%, 52%)'
  },
  {
    id: 5,
    title: 'SelfCare',
    hours: 12,
    previousHours: 'Last Week - 14hrs',
    backgroundColor: 'hsl(43, 84%, 65%)'
  }
]

const Week = () => {
  return(
    <Card date={weekData} />
  );
};

export default Week;
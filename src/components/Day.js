import React from "react";
import Card from './Card';

const dayDate = [
  {
    id: 0,
    title: 'Work',
    hours: 8,
    previousHours: 'Last Day - 8hrs',
    backgroundColor: 'hsl(15, 100%, 70%)'
  },
  {
    id: 1,
    title: 'Play',
    hours: 2,
    previousHours: 'Last Day - 3hrs',
    backgroundColor: 'hsl(195, 74%, 62%)'
  },
  {
    id: 2,
    title: 'Study',
    hours: 2,
    previousHours: 'Last Day - 2hrs',
    backgroundColor: 'hsl(348, 100%, 68%)'
  },

  {
    id: 3,
    title: 'Exercise',
    hours: 1,
    previousHours: 'Last Day - 2hrs',
    backgroundColor: 'hsl(145, 58%, 55%)'
  },
  {
    id: 4,
    title: 'Social',
    hours: 2,
    previousHours: 'Last Day - 2hrs',
    backgroundColor: 'hsl(264, 64%, 52%)'
  },
  {
    id: 5,
    title: 'SelfCare',
    hours: 2,
    previousHours: 'Last Day - 2hrs',
    backgroundColor: 'hsl(43, 84%, 65%)'
  }
]

const Day = () => {
  return(
    <Card date={dayDate} />
  );
};

export default Day;
import React from "react";
import Card from './Card';

const monthData = [
  {
    id: 0,
    title: 'Work',
    hours: 160,
    previousHours: 'Last Month - 168hrs',
    backgroundColor: 'hsl(15, 100%, 70%)'
  },
  {
    id: 1,
    title: 'Play',
    hours: 30,
    previousHours: 'Last Month - 32hrs',
    backgroundColor: 'hsl(195, 74%, 62%)'
  },
  {
    id: 2,
    title: 'Study',
    hours: 36,
    previousHours: 'Last Month - 28hrs',
    backgroundColor: 'hsl(348, 100%, 68%)'
  },
  {
    id: 3,
    title: 'Exercise',
    hours: 20,
    previousHours: 'Last Month - 23hrs',
    backgroundColor: 'hsl(145, 58%, 55%)'
  },
  {
    id: 4,
    title: 'Social',
    hours: 12,
    previousHours: 'Last Month - 18hrs',
    backgroundColor: 'hsl(264, 64%, 52%)'
  },
  {
    id: 5,
    title: 'SelfCare',
    hours: 13,
    previousHours: 'Last Month - 15hrs',
    backgroundColor: 'hsl(43, 84%, 65%)'
  }
]

const Month = () => {
  return(
    <Card date={monthData}/>
  );
};

export default Month;
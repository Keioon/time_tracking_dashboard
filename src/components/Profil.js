import React from "react";
import '../styles/Profil.scss';
import { NavLink } from 'react-router-dom';
import profilImg from '../images/image-jeremy.png';

const Profil = ({routeName}) => (
  <div className="profilBox">
    <div className="mainBox">
      <div className="imgContainer">
        <img src={profilImg} alt="face"></img>
      </div>
      <div className='textContainer'>
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
    </div>
    <div className="sideBox">
      <NavLink to={`${routeName}/day`} className={({ isActive }) => (isActive ? 'active' : '')}>Daily</NavLink>
      <NavLink to={`${routeName}/week`} className={({ isActive }) => (isActive ? 'active' : '')}>Week</NavLink>
      <NavLink to={`${routeName}/month`} className={({ isActive }) => (isActive ? 'active' : '')}>Month</NavLink>
    </div>
  </div>
);

export default Profil;
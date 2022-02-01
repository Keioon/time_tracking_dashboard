import React from "react";
import '../styles/Card.scss';
import imgOptions from '../images/icon-ellipsis.svg';
import imgExercise from '../images/icon-exercise.svg';
import imgPlay from '../images/icon-play.svg';
import imgSelfCare from '../images/icon-self-care.svg';
import imgSocial from '../images/icon-social.svg';
import imgStudy from '../images/icon-study.svg';
import imgWork from '../images/icon-work.svg';

const Card = ({date}) => {
  const cardList = date.map(elem => {
    let src = '';
    if(elem.title === 'Work') {
      src = imgWork;
    } else if(elem.title === 'Play') {
      src = imgPlay;
    } else if(elem.title === 'Study') {
      src = imgStudy;
    } else if(elem.title === 'Exercise') {
      src = imgExercise;
    } else if(elem.title === 'Social') {
      src = imgSocial;
    } else {
      src = imgSelfCare;
    }
    return(
      <div className='cardBox' key={elem.id} style={{backgroundColor: `${elem.backgroundColor}`}}>
        <img className='cardBoxImg' src={src} alt={elem.title}/>
        <div className='cardMainBox'>
          <div className='cardHeader'>
            <h4>{elem.title}</h4>
            <img src={imgOptions} alt='options'></img>
          </div>
          <h1>{elem.hours}hrs</h1>
          <p>{elem.previousHours}</p>
        </div>
      </div>
    )
  })

  return(
    <>
      {cardList}
    </>
  );
}

export default Card;
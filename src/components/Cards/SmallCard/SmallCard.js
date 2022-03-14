import React from 'react';
import './SmallCard.scss';
import imgs from '../../../assets/imgs';

const SmallCard = ({item}) => {
  return (
    <li className='home-small-card'>
      <div className='home-smallcard-imgs'>
        <img src={item.img} alt="top" />
      </div>
      <h2 className='home-smallCard-title'>{item.title}</h2>
    </li>
  );
};

export default SmallCard;
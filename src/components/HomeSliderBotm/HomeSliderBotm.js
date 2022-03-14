import React from 'react';
import './HomeSliderBotm.scss';

const HomeSliderBotm = ({ item }) => {
  return (
    <li className='home-slider-botm-item'>
      <span className='home-slider-botm-icon'>
        {item.icn}
      </span>
      <h3 className='home-slider-botm-title'>{item.title}</h3>
      <p className='home-slider-botm-text'>{item.text}</p>
    </li>
  );
};

export default HomeSliderBotm;
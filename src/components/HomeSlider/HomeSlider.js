import React from 'react';
import './HomeSlider.scss';




const HomeSlider = ({ item }) => {
  return (
    <div className={`home-slider ${item.s + item.c}`}>
      <img src={item.img} alt="img1" />
      <div className='home-slider-content'>
        <h4 className='home-slider-sub-title1'>{item.subTitle}</h4>
        <h3 className='home-slider-title1'>{item.title} <span>{item.spanTitle}</span></h3>
        <button className='home-slider-btn1'>SHOP NOW</button>
      </div>
    </div>
  );
};

export default HomeSlider;
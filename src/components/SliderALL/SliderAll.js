import React from 'react';
import './SliderAll.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// 
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span onClick={onClick} className='btn-slick btn-right'>
      <BsChevronRight
      className={className}
      style={{
        ...style,
      }}
    />
    </span>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
   <span onClick={onClick} className='btn-slick btn-left'>
      <BsChevronLeft
      className={className}
      style={{
        ...style,
        zIndex: 3,
      }}
    />
   </span>
  );
}


const SliderAll = ({ children, dots, show, res }) => {
  const settings = {
    dots: dots,
    infinite: true,
    slidesToShow: show,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: res,
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default SliderAll;
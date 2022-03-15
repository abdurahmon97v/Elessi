import React from 'react';
import './HomeNav.scss';
import { getProduct } from '../../store/homeSlice';
import { useDispatch } from 'react-redux';

const HomeNav = () => {
  const dispatch = useDispatch();
  const [active, setActive] = React.useState('fruits');
  const addClass = (item) => {
    if (item === active) {
      return 'home-nav__item activeItem';
    }
    else {
      return 'home-nav__item';
    }
  }
  const clickItem = (el) => {
    setActive(el);
    dispatch(getProduct({nam:el}));
  }
 

  return (
    <ul className='home-futured__nav home-nav'>
      <li onClick={() => clickItem('fruits')} className={addClass('fruits')}>Fruits</li>
      <li onClick={() => clickItem('vegatables')} className={addClass('vegatables')}>Vegetables</li>
      <li onClick={() => clickItem('milks')} className={addClass('milks')}>Milk & Cream</li>
      <li onClick={() => clickItem('allProducts')} className={addClass('allProducts')}>ALL</li>
    </ul>
  );
};

export default HomeNav;
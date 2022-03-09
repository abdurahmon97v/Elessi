import React from 'react';
import './HeaderTop.scss';
import { BsChevronDown } from "react-icons/bs";
// 
import imgs from '../../../assets/imgs';
import HeaderTopModal from './HeaderTopModal';

const HeaderTop = () => {
  const flags = [
    {
      lang:'EUR',
      img:imgs.flag1
    },
    {
      lang:'USD',
      img:imgs.flag2
    },
    {
      lang:'GBP',
      img:imgs.flag3
    },
    
  ]

  return (
    <div className='HeaderTop'>
      <div className='container header-top-inner'>
        <p className='header-top-text'>Add anything here or just remove it...</p>
        <div className='header-top-el'>
          <div className='header-to-flsgs'>
            Englesh <BsChevronDown />
          </div>
          <div className='header-top-flag'>
            <img src={imgs.flag1} alt="img" />
            <p>USD <BsChevronDown /></p>
            <HeaderTopModal list={flags}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
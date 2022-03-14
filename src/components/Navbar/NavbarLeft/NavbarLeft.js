import React from 'react';
import './NavbarLeft.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import LeftIcons from './LeftIcons';
import LeftDatas from './LeftDatas';
import { iconData, data, demoData, shopData, productData } from "../../../data";
import { useLocation } from 'react-router-dom';



const NavbarLeft = () => {
  const locate = useLocation()
  const [botmList, setBotmList] = React.useState(false);
  React.useEffect(() => {
    setBotmList(locate.pathname === '/' ? true : false)
  }, [locate])

  return (
    <div className='navbar-left'>
      <div className='navbar-left-block'>
        <button onClick={() => setBotmList(!botmList)} className='navbar-left-btn'>
          <AiOutlineMenu className='navbar-left-icon' />
          BROWSE CATEGORIES
        </button>
        {botmList ?
          <div className='navbar-bot-b'>
            <ul className='navbar-botm-el'>
              {iconData.map((e) => <LeftIcons
                key={e.text}
                datas={e.datas}
                Icon={e.icon}
                text={e.text}
                Chevron={e.chev}
              />)}
            </ul>
          </div> : ""
        }

      </div>
      <ul className='navbar-left-list'>
        <li className='nabar-left-item'>
          <LeftDatas texts={demoData} />
          DEMO
        </li>
        <li className='nabar-left-item'>
          SHOP
          <LeftDatas texts={shopData} slide={data.vegatables} />
        </li>
        <li className='nabar-left-item'>
          PRODUCT
          <LeftDatas texts={productData} />
        </li>
        <li className='nabar-left-item'>
          ELEMENTS
          <LeftDatas texts={demoData} />
        </li>
        <li className='nabar-left-item item-left-bag'>
          < HiOutlineShoppingBag />
          BUY
        </li>
      </ul>
    </div>
  );
};

export default NavbarLeft;
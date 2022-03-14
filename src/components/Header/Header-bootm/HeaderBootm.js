import React from 'react';
import './HeaderBootm.scss';
import { Link } from 'react-router-dom';
import imgs from '../../../assets/imgs';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBag ,BsSearch} from 'react-icons/bs';
import OverModal from '../../OverModal/OverModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { chengeModal } from '../../../store/homeSlice';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';


const HeaderBootm = () => {
  const { overmodal } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const chengeMdal = () => {
    dispatch(chengeModal(true))
  }
  return (
    <div className='container'>

      {overmodal ? <OverModal cl='right' /> : ''}

      <div className='HeaderBootm'>
        <button className='header-botm-menu'>
          <HiOutlineMenuAlt1 className='header-botm-icon' />
        </button>
        <Link className='header-botm-link' to='/'>
          <img src={imgs.logo} alt="logo" />
        </Link>
        <form className='header-botm-form'>
          <label>
            <input type="text" placeholder='I’m shopping for....' />
          </label>
          <button>SEARCH</button>
        </form>
        <ul className='header-top-buttons'>
          <li className='header-top-search-icon' onClick={chengeMdal}>
            <BsSearch className='header-botm-icon' />
          </li>
          <li className='header-top-user-icon' onClick={chengeMdal}>
            <HiOutlineUserCircle className='header-botm-icon' />
          </li>
          <li className='header-top-heart-icon'>
            <Link to='/wishlist'>
              <AiOutlineHeart className='header-botm-icon' />
            </Link>
          </li>
          <li>
            <BsBag className='header-botm-icon' />
          </li>
        </ul>
      </div>

    </div>
  );
};

export default HeaderBootm;
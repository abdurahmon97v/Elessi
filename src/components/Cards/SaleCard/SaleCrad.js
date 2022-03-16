import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SaleCard.scss';


const SaleCrad = ({item , botm}) => {
  const navigate = useNavigate()
  const routePage = () => {
    navigate(`info/${item.name}`);
  }

  return (
    <li className={botm ? 'sale-card-miniblock botm-el': 'sale-card-miniblock'}>
      <div style={{cursor:'pointer'}} onClick={routePage} className='sale-card-miniblock-img'>
        <img src={item.img} alt="img" />
      </div>
      <div className='sale-card-miniblock-content'>
        <h2 onClick={routePage} className='sale-card-miniblock-title'>{item.name}</h2>
        <p className='sale-card-miniblock-prises'>
          <span className='sale-card-miniblock-price'>$ {item.saleCount}</span>
          <span className='sale-card-miniblock-sale'>$ {item.price}</span>
        </p>
      </div>
    </li>
  );
};

export default SaleCrad;
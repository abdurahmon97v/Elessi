import React from 'react';
import './SaleCard.scss';


const SaleCrad = ({item , botm}) => {
  return (
    <li onClick={()=> console.log('efef')} className={botm ? 'sale-card-miniblock botm-el': 'sale-card-miniblock'}>
      <div className='sale-card-miniblock-img'>
        <img src={item.img} alt="img" />
      </div>
      <div className='sale-card-miniblock-content'>
        <h2 className='sale-card-miniblock-title'>{item.name}</h2>
        <p className='sale-card-miniblock-prises'>
          <span className='sale-card-miniblock-price'>$ {item.saleCount}</span>
          <span className='sale-card-miniblock-sale'>$ {item.price}</span>
        </p>
      </div>
    </li>
  );
};

export default SaleCrad;
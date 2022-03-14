import React from 'react';

const BigCard = ({item}) => {
  return (
    <div className='sale-products'>
      <h2 className='sale-product-title'>{item.name}</h2>
      <div className='sale-product-prises'>
        <p className='sale-product-salecount'>$ {item.saleCount}</p>
        <p className='sale-product-price'>$ {item.price}</p>
      </div>
      <ul className='sale-products-list'>
        <li>
          <span>0</span>
          days
        </li>
        <li>
          <span>00</span>
          hours
        </li>
        <li>
          <span>00</span>
          mins
        </li>
        <li>
          <span>00</span>
          secs
        </li>
      </ul>
      <div className='sale-product-avalables'>
        <p className='sale-avlable'>Available: {item.pro}</p>
        <div className='sale-product-statistik'>
          <span style={{width:`${item.pro}%`}}></span>
        </div>
        <button className='sale-product-add-card'>Add to cart</button>
      </div>
    </div>
  );
};

export default BigCard;
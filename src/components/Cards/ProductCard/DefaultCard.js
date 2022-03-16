import React from 'react';

const DefaultCard = ({ item , routePage }) => {
  return (
    <div className='product-card-name'>
      <h3>
        <span onClick={()=> routePage()}>{item.name}</span>
      </h3>
      <p className='product-card-prises'>
        <span className='product-card-prise'>$ {item.price}</span>
        <button>Quick Shop</button>
      </p>
    </div>
  );
};

export default DefaultCard;
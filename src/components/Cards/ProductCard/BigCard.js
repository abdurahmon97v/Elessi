import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAdd, chengeTrusy, chengeFalsey, decrementProduct,getSubtotal } from '../../../store/homeSlice';

const BigCard = ({ item, routePage }) => {
  const dispatch = useDispatch();
  const { products, user } = useSelector((e) => e.home);
  const openCart = () => {
    const result = products.find((e) => e.id === item.id);
    if (user) {
      if (!result) {
        item.count += 1;
        item.sum += item.price;
        dispatch(productAdd(item));
        dispatch(getSubtotal());
        dispatch(chengeTrusy({ mod: 'openCard' }));
        document.body.style.overflow = "hidden";
      }
      else if (result && result.count === 0){
        dispatch(decrementProduct({id:result.id}));
        dispatch(getSubtotal());
      }
      else {
        dispatch(chengeTrusy({ mod: 'openCard' }));
        document.body.style.overflow = "hidden";
      }
    }
    else {
      dispatch(chengeFalsey({ mod: 'loginModal' }));
      document.body.style.overflow = "hidden";
    }

  }

  return (
    <>
      <div className='sale-products'>
        <h2 onClick={() => routePage()} className='sale-product-title'>{item.name}</h2>
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
            <span style={{ width: `${item.pro}%` }}></span>
          </div>
          <button onClick={openCart} className='sale-product-add-card'>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default BigCard;
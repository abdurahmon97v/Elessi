import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { TiArrowSyncOutline } from 'react-icons/ti';
import DefaultCard from './DefaultCard';
import BigCard from './BigCard';

const ProductCard = ({ item, sales }) => {

  return (

    <div className='product-card'>
      <div className={sales ? `product-card-all products-sale` : `product-card-all`}>
        <div className='product-card-img-block'>
          {item.sale ? <span className='product-card-sale'>{item.salePercent}%</span> : ''}
          <img className='product-card-img1' src={item.img} alt="img" />
          <img className='product-card-img2' src={item.img2} alt="img" />
          <ul className='product-card-list'>
            <li>
              <Link to='wishlist'>
                <AiOutlineHeart />
                <span className='product-card-wish'>
                  Add to Wishlist
                </span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <AiOutlineEye />
                <span className='product-card-quick'>
                  Quick view
                </span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <TiArrowSyncOutline />
                <span className='product-card-compare'>
                  Compare
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {sales ?
          <BigCard item={item} />
          :
          <DefaultCard item={item} />
        }
      </div>
    </div>
  );
};

export default ProductCard;
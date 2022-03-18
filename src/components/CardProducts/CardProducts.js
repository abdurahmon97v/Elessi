import React from 'react';
// import { userProducts } from '../../data';
import st from './CardProduct.module.scss';
import { useSelector } from 'react-redux';


const CardProducts = () => {
  const { products } = useSelector((e) => e.home);


  return (
    <div className={st.product}>
      {products.map((e) => (
        <>
        {e.count ? 
          <div key={e.id} className={st.allProducts}>
          <div className={st.productImg}>
            <img src={e.img} alt="imgs" />
          </div>
          <div>
            <h2>{e.name}</h2>
            <div className={st.productPrice}>
              <p>Total: $ {e.price}</p>
              <p>SubTotal: $ {e.sum}</p>
            </div>
            <p className={st.counts}>
              <button>-</button>
              <span>{e.count}</span>
              <button>+</button>
            </p>
          </div>
        </div>
        : ''}
          
        </>

      ))}
    </div>



  );
};

export default CardProducts;
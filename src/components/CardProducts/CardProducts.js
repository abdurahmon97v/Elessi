import React from 'react';
import st from './CardProduct.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { icrementProduct, clearProduct, decrementProduct, getSubtotal, chengeFalsey } from '../../store/homeSlice';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';




const CardProducts = () => {
  const { products, subTotal } = useSelector((e) => e.home);
  const dispatch = useDispatch();


  const icrement = (id) => {
    dispatch(icrementProduct({ id: id }));
    dispatch(getSubtotal());
  }
  const decrement = (id) => {
    dispatch(decrementProduct({ id: id }));
    dispatch(getSubtotal());
  }
  const closeCart = () => {
    dispatch(chengeFalsey({ mod: 'openCard' }));
    document.body.style.overflow = "auto";
  }
  const delProduct = (id) => {
    dispatch(clearProduct({id}));
    dispatch(getSubtotal());
  }
  return (
    <div className={st.product}>
      <div className={st.productTop}>
        <h2 >SHOPPING CART</h2>
        <AiOutlineClose onClick={closeCart} />
      </div>
      <div className={st.items}>
        {products.map((e) => (
          <div key={e.id}>
            {e.count ?
              <div className={st.allProducts}>
                <div className={st.productImg}>
                  <img src={e.img} alt="imgs" />
                </div>
                <div className={st.counters}>
                  <h2 className={st.title}>{e.name}</h2>
                  <div className={st.productPrice}>
                    <p>Total: $ {e.price}</p>
                    <p>SubTotal: $ {e.sum}</p>
                  </div>
                  <div className={st.counts}>
                    <div className={st.countBlock}>
                      <button className={st.leftBtn} onClick={() => icrement(e.id)}>{e.count > 1 ? '-' : <RiDeleteBin5Line />}</button>
                      <span>{e.count}</span>
                      <button className={st.rightBtn} onClick={() => decrement(e.id)}>+</button>
                    </div>
                    <RiDeleteBin5Line onClick={()=>delProduct(e.id)} className={st.deleteIcon} />
                  </div>
                </div>
              </div>
              : ''}

          </div>
        ))}
      </div>
      <div className={st.totalBar}>
        <div>
          <h2 className={st.subtotal}>SubTotal: <span>${subTotal}</span></h2>
          <p>Taxes, shipping and discounts codes calculated at checkout</p>
        </div>
        <button className={st.cheskout}>Check Out</button>
      </div>
    </div>
  );
};

export default CardProducts;
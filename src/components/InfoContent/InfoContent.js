import React from 'react';
import st from './InfoContent.module.scss';
import imgs from '../../assets/imgs';
import { useDispatch, useSelector } from 'react-redux';
import { decrementProduct, icrementProduct, getSubtotal } from '../../store/homeSlice';


const InfoContent = ({ item, addCard }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((e) => e.home);

  const totalCount = products.find((e) => e.id === item.id);

  const icrementPro = () => {
    dispatch(icrementProduct({ id: item.id }));
    dispatch(getSubtotal())
  }
  const decrementPro = () => {
    dispatch(decrementProduct({ id: item.id }));
    dispatch(getSubtotal())
  }

  return (
    <div className={st.content}>
      <h2 className={st.title}>{item.name}</h2>
      <p className={st.prises}>
        <span className={st.saleCount}>$ {item.saleCount}</span>
        <span className={st.curentPrice}>$ {item.price}</span>
      </p>
      <p className={st.texts}>
        Features Finally—a white sneaker for the rest of your life. Whether you’re walking, working, or simply kicking it, the versatile and understated Royale Blanco is going to get you where you..
      </p>
      <div className={st.buy}>
        <div className={st.buyCount}>
          <button onClick={decrementPro}>+</button>
          <input value={(totalCount ? totalCount.count : 0)} disabled type="text" />
          <button onClick={icrementPro}>-</button>
        </div>
        <button onClick={() => addCard()} className={st.buyButton}>Add To CarT</button>
      </div>
      <div className={st.logos}>
        <img src={imgs.logos} alt="logos" />
      </div>
      <div className={st.descriptio}>
        <p>SKU: <span>N/A</span></p>
        <p>Vendor: <span>Elessi Shopify Theme 2</span></p>
        <p>Availability: <span>In Stock</span></p>
        <p>Categories: <span>In Stock</span></p>
        <p>Tags: <span>Fruits</span></p>
      </div>
    </div>
  );
};

export default InfoContent;
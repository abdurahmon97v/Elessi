import React from 'react';
import st from './InfoContent.module.scss';
import imgs from '../../assets/imgs';
import { useDispatch } from 'react-redux';
import { decrementProduct,icrementProduct } from '../../store/homeSlice';


const InfoContent = ({ item, addCard }) => {
  const dispatch = useDispatch();

  const icrementPro = () => {
    dispatch(icrementProduct({id:item.id}));
  }
  const decrementPro = () => {
    dispatch(decrementProduct({id:item.id}));
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
          <input value={item.count} disabled type="text" />
          <button onClick={icrementPro} >-</button>
        </div>
        <button onClick={() => addCard()} className={st.buyButton}>Add To CarT</button>
      </div>
      <div className={st.logos}>
        <img src={imgs.logos} alt="logos" />
      </div>
    </div>
  );
};

export default InfoContent;
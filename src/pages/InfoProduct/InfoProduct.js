import React from 'react';
import st from './info.module.scss';
import { useParams } from 'react-router-dom';
import { sortName } from '../../sortProduct';

const InfoProduct = () => {
  const param = useParams();
  const result = sortName(param.id);
  const [product] = result;
  const { name, price, img, img2 } = product;

  return (
    <>
      <section className={st.info}>
        <div className='container'>
          <div className={st.block}>
            <div className={st.gallery}>

            </div>
            <div className={st.content}>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoProduct;
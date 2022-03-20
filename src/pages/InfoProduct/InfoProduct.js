import React from 'react';
import st from './info.module.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { sortName } from '../../sortProduct';
import { SliderAll, InfoContent, OverModal, Login, CardProducts } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { chengeTrusy, chengeFalsey, productAdd } from '../../store/homeSlice';


const InfoProduct = () => {
  const { user, loginModal, openCard } = useSelector((e) => e.home);
  const dispatch = useDispatch();
  const param = useParams();

  const result = sortName(param.id);
  const [all] = result;

  React.useEffect(() => {
    dispatch(productAdd(all));
    window.scrollTo(0,0);
  }, [all])



  const addCard = () => {
    if (user) {
      dispatch(chengeTrusy({ mod: 'openCard' }));
      document.body.style.overflow = "hidden";
    }
    else {
      dispatch(chengeFalsey({ mod: 'loginModal' }));
      document.body.style.overflow = "hidden";
    }
  }
  return (
    <>
      <>
        {loginModal ? '' : <OverModal cl={'right'}>
          <Login />
        </OverModal>}
        {openCard ? <OverModal cl={'right'}>
          <CardProducts />
        </OverModal> : ''}
        <div className={st.top}>
          <Link to='/'>Home {' > ' + all.name}</Link>
        </div>
        <section className={st.info}>
          <div className='container'>
            <div className={st.block}>
              <div className={st.gallery}>
                <SliderAll show={1} dots>
                  <img src={all.img} alt="img" />
                  <img src={all.img2} alt="img" />
                </SliderAll>
              </div>
              {[all].map((e) => (
                <InfoContent
                  key={e.id}
                  item={e}
                  addCard={addCard}
                />
              ))}
            </div>
          </div>
        </section>
      </>

    </>
  );
};

export default InfoProduct;
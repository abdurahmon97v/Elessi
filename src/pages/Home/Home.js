import React from 'react';
import { HomeSlider, HomeSliderBotm, ProductCard, SaleCrad, SmallCard } from '../../components';
import { homeSlider } from '../../data';
import { SliderAll } from '../../components';
import { homeSliderBotm } from '../../data';
import { topSectionImgs } from '../../data';
import { saleProduct } from '../../saleProduct';
import './Home.scss';


const Home = () => {
  // 1018
  // 754
  const retingRespon = [
    {
      breakpoint: 1018,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 778,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  const responSlider = [
    {
      breakpoint: 800,
      settings: {
        dots: false,
      }
    }
  ]
  const sales = saleProduct();
  const rightSales = saleProduct().slice(0, 4);

  return (
    <>
      <section className='home-sliders'>
        <SliderAll res={responSlider} dots show={1}>
          {homeSlider.map((e) => (
            <HomeSlider key={e.title} item={e} />
          ))}
        </SliderAll>
      </section>
      <section className='home-slider-botm'>
        <div className='container'>
          <ul className='home-slider-botm-list'>
            {homeSliderBotm.map((e) => (
              <HomeSliderBotm key={e.title} item={e} />
            ))}
          </ul>
        </div>
      </section>
      <section className='home-reating'>
        <div className='container'>
          <h2 className='home-reating-title'>Top Categories</h2>
          <ul>
            <SliderAll res={retingRespon} show={6}>
              {topSectionImgs.map((e) => (<SmallCard key={e.title} item={e} />))}
            </SliderAll>
          </ul>
        </div>
      </section>
      <section className='home-galery'>
        <div className='container'>
          <div className='home-sales-block'>
            <div className='home-sale-block'>
              <div className='home-sale-top'>
                <div className='home-sale-titles'>
                  <h2 className='home-sale-title'>Deal of the Day</h2>
                </div>
                <div className='home-saless-all'>
                  <SliderAll show={1}>
                    {sales.map((e) => (<ProductCard key={e.id} sales item={e} />))}
                  </SliderAll>
                </div>
              </div>
            </div>
            <ul className='home-sale-block2'>
              {rightSales.map((e) => (<SaleCrad key={e.id} item={e} />))}
            </ul>
          </div>
        </div>
      </section>
      <section className='home-futered'>
        <div className='container'>
          <h2 className='home-futured__title'>Featured Products</h2>
          
        </div>
      </section>
    </>
  );
};

export default Home;
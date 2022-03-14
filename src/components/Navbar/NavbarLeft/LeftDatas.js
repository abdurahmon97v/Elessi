import React from 'react';
import SliderAll from '../../SliderALL/SliderAll';
import ProductCard from './../../Cards/ProductCard/ProductCard';

const LeftDatas = ({ texts, slide }) => {
  return (
    <div className='left-datas'>
      {texts.map((e) => (
        <div key={e.title} className='left-datas-block'>
          <h2 className='left-datas-block-title'>{e.title}</h2>
          <ul>
            {e.items.map((i) => (
              <li key={i} className='left-datas-block-text'>{i}</li>
            ))}
          </ul>
        </div>
      ))}
      {slide ? <div className='left-datas-slider'>
        <SliderAll show={2} arrow={true}>
          {slide.map((e) => (
            <ProductCard key={e.id} item={e}/>
          ))}
        </SliderAll>
      </div> : ""}
    </div>
  );
};

export default LeftDatas;
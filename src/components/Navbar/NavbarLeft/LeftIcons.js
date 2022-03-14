import React from 'react';

const LeftIcons = ({ Icon, text, Chevron, datas }) => {
  return (
    <li className='navbar-botm-item'>
      <span>
        {Icon}
        {text}
      </span>
      {Chevron}
      {datas ? <div className='navbar-botm-item-blok'>
        {datas.map((item)=>(
          <div className='navbar-botm-item-blok-list' key={item.title}>
            <h2>{item.title}</h2>
            <ul>
              {item.subTitle.map((inner)=>(
                <li key={inner}>{inner}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> : ''}

    </li>
  );
};

export default LeftIcons;

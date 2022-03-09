import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const HeaderTopModal = ({ list = [] }) => {
  return (
    <div className='header-top-modals'>
      <ul className='header-top-modal'>
        {list.map((e) => (<li key={uuidv4()}>
          {e.img ? <img src={e.img} alt="imgs" /> : ""}
          {e.lang}
        </li>))}
      </ul>
    </div>
  );
};

export default HeaderTopModal;
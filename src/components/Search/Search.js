import React from 'react';
import st from './search.module.scss';
import SaleCrad from '../Cards/SaleCard/SaleCrad';
import { data } from '../../data';

const Search = ({ search, setInputVal }) => {
  return (
    <div className={st.blosk}>
      <ul onClick={() => setInputVal("")}>
        {data.allProducts.filter((e) => e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map((e) => (
            <SaleCrad botm item={e} />
          ))
        }
      </ul>
    </div>
  );
};

export default Search;
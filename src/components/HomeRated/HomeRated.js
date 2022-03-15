import React from 'react';
import styles from './homeRated.module.scss';
import { sortRaiting } from '../../sortProduct';
import SaleCrad from '../Cards/SaleCard/SaleCrad';

const HomeRated = ({ item }) => {
  const result = sortRaiting(item.category);
  
  return (
    <div className={styles.homeRated}>
      <h2 className={styles.homeRated_title}>{item.title}</h2>
      <ul className={styles.homeRated_list}>
        {result.map((e) => (<SaleCrad key={e.id} botm item={e} />))}
      </ul>
    </div>
  );
};

export default HomeRated;
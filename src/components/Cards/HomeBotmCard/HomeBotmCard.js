import React from 'react';
import styles from './homeBotmCard.module.scss';

const HomeBotmCard = ({item}) => {
  return (
    <li className={styles.card}>
      <img src={item.img} alt="bot1" />
      <h2 className={styles.cardTitle}>{item.title}</h2>
    </li>
  );
};

export default HomeBotmCard;
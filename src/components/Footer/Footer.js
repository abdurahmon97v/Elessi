import React from 'react';
import styles from './footer.module.scss';
import imgs from '../../assets/imgs';
import { FiFacebook } from 'react-icons/fi';
import { FaPinterestP, FaTiktok } from 'react-icons/fa';

import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <div className={styles.block}>
          <div className={styles.items}>
            <a className={styles.logo} href="#">
              <img src={imgs.logo} alt="logo" />
            </a>
            <p className={styles.text}>Calista Wise 7292 Dictum Av. Antonio, Italy.</p>
            <a className={styles.logo} href="tel:(+01)-800-3456-88">(+01)-800-3456-88</a>
            <a className={styles.logo} href="mailto:contact@company.com">contact@company.com</a>
            <ul className={styles.list_logo}>
              <li><a className={styles.icons} href="#"><FiFacebook /></a></li>
              <li><a className={styles.icons} href="#"><AiOutlineTwitter /></a></li>
              <li><a className={styles.icons} href="#"><AiOutlineInstagram /></a></li>
              <li><a className={styles.icons} href="#"><FaPinterestP /></a></li>
              <li><a className={styles.icons} href="#"><FaTiktok /></a></li>
            </ul>
          </div>
          <div className={styles.items}>
            <h2>Useful links</h2>
            <ul className={styles.usefull_list}>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Search Terms</a></li>
            </ul>
          </div>
          <div className={styles.items}>
            <h2>Get in touch</h2>
            <ul className={styles.usefull_list}>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Search Terms</a></li>
            </ul>
          </div>
          <div className={styles.items}>
            <h2>Newsletter signup</h2>
            <ul className={styles.usefull_list}>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Search Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
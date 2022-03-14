import React from 'react';
import HeaderTop from './Header-Top/HeaderTop';
import HeaderBootm from './Header-bootm/HeaderBootm';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBootm />
      <Navbar />
    </>
  );
};

export default Header;
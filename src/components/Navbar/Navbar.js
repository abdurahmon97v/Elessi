import React from 'react';
import './Navbar.scss';
import NavbarLeft from './NavbarLeft/NavbarLeft';
import { BsTelephone, BsChat } from 'react-icons/bs';
const Navbar = () => {
  return (
    <section className='navbar'>
      <nav className='container nav'>
        <ul className='navbar-list'>
          <li className='navbar-left-ele'>
            <NavbarLeft />
          </li>
          <li className='navbar-right'>
            <a href="tel: +01 23456789 "> 
            <BsTelephone />
            +01 23456789 
            </a>
            <a href="mailto:elessi@domain.com">
              <BsChat />
              Elessi@domain.com
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
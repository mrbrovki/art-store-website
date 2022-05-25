import React, { FC, useContext } from 'react';
// components
import Logo from './Logo';
import Navigation from './Navigation';
import Cart from './Cart';
// context
import { Context } from '../../../context';
// styles
import styles from '../../../styles/css/header.module.css'



const Header:FC = () => {
  const {state: {roomView}} = useContext(Context);
  return (
    <header className={styles.header_container + ' ' + styles[roomView]}>
        <Logo />
        <Navigation />
        <Cart />
    </header>
  );
};

export default Header;
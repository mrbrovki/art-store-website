import React, { FC, useContext } from 'react';
// types
// components
import Logo from './Logo';
import Navigation from './Navigation';
import Cart from './Cart';
// context
// styles
import styles from '../../../styles/css/header.module.css'
import { Context } from '../../../context';



const Header:FC = () => {
  const {state: {room}} = useContext(Context);
  return (
    <header className={styles.header_container + ' ' + styles[room]}>
        <Logo />
        <Navigation />
        <Cart />
    </header>
  );
};

export default Header;
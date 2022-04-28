import React, { FC } from 'react';
// types
// components
import Logo from './Logo';
import Navigation from './Navigation';
import Cart from './Cart';
import Search from './Search';
// context
// styles
import styles from '../../../styles/css/header.module.css'



const Header:FC = () => {
  return (
    <header className={styles.header_container}>
        <Logo />
        <Navigation />
        <Search />
        <Cart />
    </header>
  );
};

export default Header;
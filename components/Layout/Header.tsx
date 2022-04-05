import React, { FC } from 'react';
import Image from 'next/image';
import Navigation from './Navigation';
import styles from '../../styles/css/header.module.css';
import Link from 'next/link';

const Header:FC = () => {
  return (
    <header className={styles.header_container}>
      <Link href={'/'} passHref>
      <a className={styles.logo}>
        <Image src='/assets/logo.svg' layout={'fixed'} height={28} width={154} alt='logo'/>
      </a>
      </Link>
      <div className={styles.right}>
        <Navigation />
        <Image src='/assets/search-icon.svg' layout={'fixed'} height={24} width={24} alt='search icon'/>
        <Image src='/assets/cart-icon.svg' layout={'fixed'} height={24} width={24} alt='search icon' />
      </div>
    </header>
  );
};

export default Header;
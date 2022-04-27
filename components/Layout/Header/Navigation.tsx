import React from 'react';
import Link from 'next/link';
import styles from '../styles/css/navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav_container}>
      <Link href={'/paintings'}>
       <a className={styles.link}>paintings</a>
      </Link>
      <Link href={'/drawings'}>
       <a className={styles.link}>drawings</a>
      </Link>
      <Link href={'/sculpture'}>
       <a className={styles.link}>sculpture</a>
      </Link>
      <Link href={'/artists'}>
       <a className={styles.link}>artists</a>
      </Link>
    </nav>
  );
};

export default Navigation;
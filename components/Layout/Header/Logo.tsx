import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// types
// components
// context
// styles
import styles from '../../../styles/css/logo.module.css';



const Logo:FC = () => {
  return (

    <Link href='/'>
      <a>
        <div className={styles.logo_container}>
          <Image src='/assets/logo.svg' width={154} height={28} />
        </div>
      </a>
    </Link>
  );
};

export default Logo;
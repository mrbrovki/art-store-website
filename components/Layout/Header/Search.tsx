import React, { FC } from 'react';
import Image from 'next/image';
// types
// components
// context
// styles
import styles from '../../../styles/css/search.module.css';



const Search:FC = () => {
  return (
    <div className={styles.search_container}>
      <Image src='/assets/search-icon.svg' width={24} height={24} />
    </div>
  );
};

export default Search;
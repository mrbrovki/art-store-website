import React from 'react';
//  types
import { NextPage } from 'next';
// components
// context
// styles
import styles from '../../styles/css/category.module.css';


const Category:NextPage = () => {
  return (
    <div className={styles.category_container}>
      <p className={styles.in_dev}>in development</p>
    </div>
  );
};

export default Category;
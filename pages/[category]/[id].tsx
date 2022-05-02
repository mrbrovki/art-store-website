import React from 'react';
//  types
import { NextPage } from 'next';
// components
// context
// styles
import styles from '../../styles/css/product.module.css';


const Product:NextPage = () => {
  return (
    <div className={styles.product_container}>
      <p className={styles.in_dev}>in development</p>
    </div>
  );
};

export default Product;
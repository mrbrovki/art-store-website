import React, {FC} from 'react';
import { PhotoProps } from '../../lib/Types';
// types
// components
// context
// styles
import styles from '../../styles/css/product.module.css';
import Details from './Details';
import View from './View';



const Product:FC<{data: PhotoProps}> = ({data}) => {
 return (
  <div className={styles.product_container}>
   <View data={data}/>
   <Details />
  </div>
 );
};
 
export default Product;
import React, {FC} from 'react';
import { PhotoProps } from '../../../lib/Types';
// types
// components
// context
// styles
import styles from '../../../styles/css/product_view.module.css';
import ProductImage from './ProductImage';



const View:FC<{data: PhotoProps}> = ({data}) => {
 return (
  <div className={styles.view_container}>
   <ProductImage src={data.src.original} />
  </div>
 );
};
 
export default View;
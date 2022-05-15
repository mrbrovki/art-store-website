import React, {FC} from 'react';
// types
// components
// context
// styles
import styles from '../../../styles/css/product_view_image.module.css';
import Image from 'next/image';


const ProductImage:FC<{src: string}> = ({src}) => {
 return (
  <div className={styles.image_container}>
   <Image src={src} layout='fill' objectFit='contain' objectPosition='center' />
  </div>
 );
};
 
export default ProductImage;
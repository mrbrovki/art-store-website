import React, {FC} from 'react';
// types
// components
// context
// styles
import styles from '../../../styles/css/product_view_image.module.css';
import Image from 'next/image';


const ProductImage:FC<{imageSrc: string}> = ({imageSrc}) => {
 return (
  <div className={styles.image_container}>
   <Image src={imageSrc} layout='fill' objectFit='contain' objectPosition='center' priority={true}/>
  </div>
 );
};
 
export default ProductImage;
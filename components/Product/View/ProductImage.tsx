import React, {FC} from 'react';
import Image from 'next/image';
// styles
import styles from '../../../styles/css/product_view_image.module.css';



const ProductImage:FC<{imageSrc: string, priority: boolean}> = ({imageSrc, priority}) => {
 return (
  <div className={styles.image_container}>
   <Image src={imageSrc} layout='fill' objectFit='contain' objectPosition='center' priority={priority} alt='product image'/>
  </div>
 );
};
 
export default ProductImage;
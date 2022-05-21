import React, {FC} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
// types
import { CategoryProduct } from '../../../lib/Types';
// components
// styles
import styles from '../../../styles/css/category_products_product.module.css';



const Product:FC<CategoryProduct> = ({imageSrc, name, author, id}) => {
  const router = useRouter();
  return (
   <div className={styles.product_container} onClick={() => router.push(`/${router.query.category}/${id}`)}>
     <div className={styles.image_container}>
      <Image src={imageSrc} layout='fill' objectFit='cover' objectPosition='center' quality={50} />
     </div>
     <div className={styles.details}>
      <p className={styles.name}>{name}</p>
      <p className={styles.author}>{author}</p>
     </div>
   </div>
  );
};
 
export default Product;
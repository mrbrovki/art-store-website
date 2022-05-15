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
 const viewData = data.src.landscape;
 const detailsData = {
  name: 'Wallowing Breeze',
  author: data.photographer,
  info: {
   description: 'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
   physical_details: 'Oil on canvas, 2008\nGallety wrap canvas\n26 in x 23 in'
  },
  price: 620
 }; 

 return (
  <div className={styles.product_container}>
   <View imageSrc={viewData}/>
   <Details details={detailsData}/>
  </div>
 );
};
 
export default Product;
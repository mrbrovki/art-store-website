import React, {FC} from 'react';
// types
// components
// context
// styles
import styles from '../../../styles/css/product_view.module.css';
import ProductImage from './ProductImage';
import RoomViewButton from './Room/RoomViewButton';
import ShareButton from './ShareButton';



const View:FC<{imageSrc: string}> = ({imageSrc}) => {
 return (
  <div className={styles.view_container}>
   <ProductImage imageSrc={imageSrc} />
   <div className={styles.btns}>
    <RoomViewButton />
    <ShareButton />
   </div>
  </div>
 );
};
 
export default View;
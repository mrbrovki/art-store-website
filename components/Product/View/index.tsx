import React, {FC, useContext} from 'react';
import { Context } from '../../../context';
import Image from 'next/image';
// types
// components
// context
// styles
import styles from '../../../styles/css/product_view.module.css';
import ProductImage from './ProductImage';
import RoomViewButton from '../Room/RoomViewButton';
import ShareButton from './ShareButton';



const View:FC<{imageSrc: string}> = ({imageSrc}) => {
 const {state: {roomView}} = useContext(Context); 
 return (
  <div className={styles.view_container + ' ' + styles[roomView]}>
   <ProductImage imageSrc={imageSrc} priority={true} />
   <div className={styles.btns}>
    <RoomViewButton />
    <ShareButton />
   </div>
  </div>
 );
};
 
export default View;
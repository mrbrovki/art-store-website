import React, {FC} from 'react';
import Image from 'next/image';
// types
// components
// context
// styles
import styles from '../../../styles/css/cart.module.css';



const Cart:FC = () => {
 return (
  <div className={styles.cart_container}>
   <Image src='/assets/cart-icon.svg' width={24} height={24} />
  </div>
 );
};
 
export default Cart;
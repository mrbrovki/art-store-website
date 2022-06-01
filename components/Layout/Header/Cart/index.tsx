import React, {FC, useContext} from 'react';
import Image from 'next/image';
// context
import { Context } from '../../../../context';
// styles
import styles from '../../../../styles/css/cart.module.css';
import CartItems from './CartItems';



const Cart:FC = () => {
 const {state: {isCartVisible}, dispatch} = useContext(Context);

 const toggleCart = () =>{
    if(isCartVisible === false){
      dispatch({type:'CART', payload: true});
      dispatch({type: 'OVERLAY', payload: true});
    }
    else{
      dispatch({type:'CART', payload: false});
      dispatch({type: 'OVERLAY', payload: false});
    }
  };

 return (
  <>
   <div className={styles.icon_container} onClick={toggleCart}>
    <Image src='/assets/cart-icon.svg' layout='fill' objectFit='contain' objectPosition='center' alt='cart'/>
   </div>
   {isCartVisible && <CartItems />}
  </>
 );
};
 
export default Cart;
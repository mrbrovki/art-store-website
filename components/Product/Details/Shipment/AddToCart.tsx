import React, {FC, useContext, useRef} from 'react';
// components
// context
import { Context } from '../../../../context';
// styles
import styles from '../../../../styles/css/add_to_cart.module.css';



const AddToCart:FC = () => {
 const {state: {currentItem}, dispatch} = useContext(Context);
 const btnRef = useRef<HTMLButtonElement>(null);
 const addToCart = () => {
 dispatch({type:'ADD_TO_CART', payload: currentItem});
 dispatch({type: 'CART', payload: true});
 dispatch({type: 'OVERLAY', payload: true});
 if(btnRef.current){
  btnRef.current.disabled = true;
 }
 };
 return (
  <button className={styles.add_to_cart} onClick={addToCart} ref={btnRef}>
   add to cart
  </button>
 );
};
 
export default AddToCart;
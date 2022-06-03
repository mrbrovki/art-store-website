import React, {FC, useContext} from 'react';
import { idMatch } from '../../../../lib/utils';
// components
// context
import { Context } from '../../../../context';
// styles
import styles from '../../../../styles/css/add_to_cart.module.css';



const AddToCart:FC = () => {
 const {state: {currentItem, items}, dispatch} = useContext(Context);
 const addToCart = () => {
 if(idMatch(currentItem, items)) return;
 dispatch({type:'ADD_TO_CART', payload: currentItem});
 dispatch({type: 'CART', payload: true});
 dispatch({type: 'OVERLAY', payload: true});
 };
 return (
  <button className={styles.add_to_cart} onClick={addToCart}>
   add to cart
  </button>
 );
};
 
export default AddToCart;
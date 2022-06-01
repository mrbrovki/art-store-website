import React, {FC, ReactNode, useContext, useEffect} from 'react';
// styles
import { Context } from '../../context';
// styles
import styles from '../../styles/css/overlay.module.css';



const Overlay:FC = () => {
 const {state: {isOverlay}, dispatch} = useContext(Context);

 const overlayClick = () => {
  dispatch({type: 'OVERLAY', payload: false});
  dispatch({type: 'CART', payload: false});
 };

 return(
  <>
   {isOverlay && 
   <div className={styles.overlay} onClick={overlayClick}></div>}
  </>
 );
};

export default Overlay;
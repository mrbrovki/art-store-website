import React, { useContext } from 'react';
import Image from 'next/image';
// components
import Overlay from '../../Overlay';
// context
import { Context } from '../../../../context';
// styles
import styles from '../../../../styles/css/cart_items.module.css';
import Link from 'next/link';



const CartItems = () => {
 const {state:{items}, dispatch} = useContext(Context);
 const cancelItem = (id: number) => {
  dispatch({type:'REMOVE_ITEM', payload: id});
 };
  return (
    <>
      <Overlay />
      <div className={styles.cart_items_container}>
        {items?.map(item => {
          if(item.image){
            return(
              <div key={item.id} className={styles.item_container}>
                <div className={styles.image_container}>
                  <Image src={item.image} layout='fill' objectFit='cover' objectPosition='center'/>
                </div>
                <div className={styles.info_container}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.author}>{item.author}</p>
                </div>
                <p className={styles.price}>
                  ${item.price}
                </p>
                <p className={styles.cancel} onClick={() => cancelItem(item.id as number)}>x</p>
              </div>
            )
          }
        })}
        <Link href='/checkout'>
          <a className={styles.checkout_link}>
            CHECKOUT
          </a>
        </Link>
      </div>
    </>
  );
};

export default CartItems;
import Image from 'next/image';
import React, {FC} from 'react';
// types
// components
// context
// styles
import styles from '../../../../styles/css/product_details_shipment.module.css';
import AddToCart from './AddToCart';



const Shipment:FC<{price: number}> = ({price}) => {
 return (
  <>
   <p className={styles.price}>
   $ {price}
   </p>
   <div className={styles.location}>
    <div className={styles.image_container}>
     <Image src='/assets/location-icon.svg' layout='fill' objectFit='contain' objectPosition='center' alt='location icon'/>
    </div>
    <span>
     Ships from New York, NY, USA
    </span>
   </div>
   
   <div className={styles.time}>
    <div className={styles.image_container}>
     <Image src='/assets/package-icon.svg' layout='fill' objectFit='contain' objectPosition='center' alt='package icon'/>
    </div>
    <span>
     Estimated to ship in 3-7 days within USA
    </span>
   </div>
   <AddToCart />
   <p>Taxes and shipping fees will apply upon checkout</p>
  </>
 );
};
 
export default Shipment;
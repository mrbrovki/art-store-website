import React, {FC} from 'react';
import { DetailsData } from '../../../lib/Types';
// types
// components
// context
// styles
import styles from '../../../styles/css/product_details_about.module.css';
import Shipment from './Shipment';



const About:FC<{details: DetailsData<string>}> = ({details}) => {
 return (
  <>
   <h1 className={styles.name}>
    {details.name}
   </h1>
   <h2 className={styles.author}>
    {details.author}
   </h2>
   <p className={styles.physical_details}>
    {details.info.physical_details}
   </p>
   <p className={styles.description}>
    {details.info.description}
   </p>
  </>
 );
};
 
export default About;
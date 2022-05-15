import React, {FC} from 'react';
import { DetailsData } from '../../../lib/Types';
// types
// components
// context
// styles
import styles from '../../../styles/css/product_details.module.css';
import About from './About';
import GoBackButton from './GoBackButton';
import Shipment from './Shipment';



const Details:FC<{details: DetailsData<string>}> = ({details}) => {
 return (
  <div className={styles.details_container}>
    <GoBackButton />
    <About details={details}/>
    <Shipment price={details.price}/>
  </div>
 );
};
 
export default Details;
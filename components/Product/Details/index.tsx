import React, {FC, useContext} from 'react';
import { Context } from '../../../context';
import { DetailsData } from '../../../lib/Types';
// components
import About from './About';
import GoBackButton from './GoBackButton';
import Shipment from './Shipment';
// styles
import styles from '../../../styles/css/product_details.module.css';



const Details:FC<{details: DetailsData<string>}> = ({details}) => {
  const {state: {roomView}} = useContext(Context);
 return (
  <div className={styles.details_container + ' ' + styles[roomView]}>
    <GoBackButton />
    <About details={details}/>
    <Shipment price={details.price}/>
  </div>
 );
};
 
export default Details;
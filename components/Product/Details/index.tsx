import React, {FC, useContext} from 'react';
import { Context } from '../../../context';
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
  const {state: {room}} = useContext(Context);
 return (
  <div className={styles.details_container + ' ' + styles[room]}>
    <GoBackButton />
    <About details={details}/>
    <Shipment price={details.price}/>
  </div>
 );
};
 
export default Details;
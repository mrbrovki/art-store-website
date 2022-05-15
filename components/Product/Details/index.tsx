import React, {FC} from 'react';
// types
// components
// context
// styles
import styles from '../../../styles/css/product_details.module.css';
import GoBackButton from './GoBackButton';



const Details:FC = () => {
 return (
  <div className={styles.details_container}>
    <GoBackButton />
  </div>
 );
};
 
export default Details;
import React, {FC} from 'react';
// components
import { Categories } from '../../lib/Types';
// styles
import styles from '../../styles/css/category_name.module.css';



const Name:FC<{categoryName: Categories}> = ({categoryName: name}) => {
 return (
  <h1 className={styles.name}>
   {name}
  </h1>
 );
};
 
export default Name;
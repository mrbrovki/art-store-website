import React, {FC} from 'react';
// types
import { Categories } from '../../lib/Types';
// components
import Name from './Name';
import Products from './Products';
// styles
import styles from '../../styles/css/category.module.css';



const Category:FC<{category: Categories}> = ({category}) => {
 return (
  <div className={styles.category_container}>
   <Name categoryName={category} />
   <Products categoryName={category}/>
  </div>
 );
};
 
export default Category;

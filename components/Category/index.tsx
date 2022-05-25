import React, {FC} from 'react';
// types
import { CategoryName } from '../../lib/Types';
// components
import Name from './Name';
import Products from './Products';
// styles
import styles from '../../styles/css/category.module.css';



const Category:FC<{category: CategoryName, pexelsKey: string}> = (props) => {
 return (
  <div className={styles.category_container}>
   <Name categoryName={props.category} />
   <Products {...props}/>
  </div>
 );
};
 
export default Category;

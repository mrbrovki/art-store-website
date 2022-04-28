import React, {FC} from 'react';
// types
import { Media } from '../../../lib/Types';
// components
// context
// styles
import styles from '../../../styles/css/featured_paintings.module.css';
import Painting from './Painting';



const Paintings:FC<{media: Media}> = ({media}) => {
 return (
  <section className={styles.paintings_container}>
    <h1 className={styles.heading}>featured paintings</h1>
    <div className={styles.carousel}>
      <div className={styles.wrapper_1}>
        {media.slice(0, 7).map(painting => {
          return(
            <Painting key={painting.id} src={painting.src.medium} id={painting.id}/>
          )
        })}
      </div>
      <div className={styles.wrapper_2}>
        {media.slice(7, 14).map(painting => {
          return(
            <Painting key={painting.id} src={painting.src.medium} id={painting.id}/>
          )
        })}
      </div>
    </div>
  </section>
 );
};
 
export default Paintings;
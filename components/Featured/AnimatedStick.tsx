import React, {FC} from 'react';
import Image from 'next/image';
// styles
import styles from '../../styles/css/featured_animated_stick.module.css';



const AnimatedStick:FC = () => {
 return (
  <>
    <div className={styles.wrapper}>
      <iframe src="https://giphy.com/embed/3o7TKnnTyK6tYMNAxW"  frameBorder="0" className="giphy-embed"></iframe>
      <div className={styles.overlay}></div>
    </div>
  </>
 );
};
 
export default AnimatedStick;
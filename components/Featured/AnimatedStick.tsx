import React, {FC} from 'react';
import Image from 'next/image';
// types
// components
// context
// styles
import styles from '../../styles/css/featured_animated_stick.module.css';



const AnimatedStick:FC = () => {
 return (
  <div className={styles.stick_container}>
    <Image src='/assets/stick.gif' layout='fill' objectFit='contain' objectPosition='center center' quality={1}/>
  </div>
 );
};
 
export default AnimatedStick;
import React, {FC} from 'react';
import Image from 'next/image';
// styles
import styles from '../../styles/css/featured_animated_stick.module.css';



const AnimatedStick:FC = () => {
 return (
  <div className={styles.stick_container}>
    <Image src='/assets/stick.gif' layout='fill' objectFit='contain' objectPosition='center center' alt='animated stick'/>
  </div>
 );
};
 
export default AnimatedStick;
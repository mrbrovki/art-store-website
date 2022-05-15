import Image from 'next/image';
import React, {FC} from 'react';
// types
// components
// context
// styles
import styles from '../../../styles/css/view_btns.module.css';



const ShareButton:FC = () => {
 return (
  <button className={styles.container}>
   <Image src='/assets/share-icon.svg' width={20} height={20} alt='share icon' />
   <span>Share</span>
  </button>
 );
};
 
export default ShareButton;
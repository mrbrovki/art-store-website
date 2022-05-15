import Image from 'next/image';
import React, {FC} from 'react';
// types
// components
// context
// styles
import styles from '../../../../styles/css/view_btns.module.css';



const RoomViewButton:FC = () => {
 return (
  <button className={styles.container}>
   <Image src='/assets/eye-icon.svg' width={20} height={20} alt='eye icon'/>
   <span>View in a room</span>
  </button>
 );
};
 
export default RoomViewButton;
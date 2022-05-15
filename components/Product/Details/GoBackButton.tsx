import React, {FC} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// styles
import styles from '../../../styles/css/go_back_btn.module.css';



const GoBackButton:FC = () => {
 const router = useRouter();

 return (
  <button className={styles.btn_container} onClick={router.back}>
   <span className={styles.arrow_container}>
    <Image src='/assets/arrow-left-icon.svg' width={16} height={16} />
   </span>
   <span className={styles.back}>back</span>
  </button>
 );
};
 
export default GoBackButton;
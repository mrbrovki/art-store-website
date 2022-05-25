import React, {FC, useContext} from 'react';
import Image from 'next/image';
// utils
import { toggleRoomView } from '../../../lib/utils';
//context
import { Context } from '../../../context';
// styles
import styles from '../../../styles/css/go_back.module.css';


const GoBackButton:FC = () => {
  const {state: {roomView}, dispatch} = useContext(Context);
 return (
  <button className={styles.btn + ' ' + styles[roomView]} onClick={() => toggleRoomView(roomView, dispatch)}>
    <Image src='/assets/arrow-left-icon.svg' layout='fill' objectFit='contain' objectPosition='center' alt='arrow icon' />
  </button>
 );
};
 
export default GoBackButton;
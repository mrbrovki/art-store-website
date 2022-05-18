import React, {FC, useContext} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// styles
import styles from '../../../styles/css/go_back.module.css';
import { Context } from '../../../context';
import { toggleRoomView } from '../../../lib/utils';


const GoBackButton:FC = () => {
  const {state: {room}, dispatch} = useContext(Context);
 return (
  <button className={styles.btn + ' ' + styles[room]} onClick={() => toggleRoomView(room, dispatch)}>
    <Image src='/assets/arrow-left-icon.svg' layout='fill' objectFit='contain' objectPosition='center' alt='arrow icon' />
  </button>
 );
};
 
export default GoBackButton;
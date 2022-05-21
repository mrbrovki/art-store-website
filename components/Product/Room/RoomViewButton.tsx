import Image from 'next/image';
import React, {FC, useContext} from 'react';
// types
// components
// context
// styles
import styles from '../../../styles/css/view_btns.module.css';
// utils
import { toggleRoomView } from '../../../lib/utils';
import { Context } from '../../../context';


const RoomViewButton:FC = () => {
 const {state, dispatch} = useContext(Context);
 return (
  <button className={styles.container} onClick={() => toggleRoomView(state.roomView, dispatch)}>
   <Image src='/assets/eye-icon.svg' width={20} height={20} alt='eye icon'/>
   <span>View in a room</span>
  </button>
 );
};
 
export default RoomViewButton;
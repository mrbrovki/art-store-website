import React, {FC, useContext} from 'react';
import Image from 'next/image';
//  context
import { Context } from '../../../context';
//  styles
import styles from '../../../styles/css/product_view_room_image.module.css';



const RoomImage:FC<{imageSrc:string}> = ({imageSrc}) => {
  const {state: {roomView}} = useContext(Context);
  return (
   <>
    {roomView &&
    <>
     <div className={styles.image_container}>
       <Image src={'/assets/room.jpg'} alt='room image' layout='fill'  objectFit='cover' objectPosition='center'/>
     </div>
     <div className={styles.product_image}>
       <Image src={imageSrc} layout='fill' objectFit='contain'   objectPosition='center' alt='product'/>
     </div>
    </>
    }
   </>
  );
};
 
export default RoomImage;
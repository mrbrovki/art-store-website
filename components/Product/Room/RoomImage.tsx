import React, {FC, useContext, useEffect} from 'react';
import Image from 'next/image';
// styles
import styles from '../../../styles/css/product_view_room_image.module.css';
import { Context } from '../../../context';

interface Room{
  urls: {
    full: string;
  };
};

const RoomImage:FC<{imageSrc:string}> = ({imageSrc}) => {
  const {state: {roomView, roomImage}, dispatch} = useContext(Context);
  const fetchImage = async () => {
    const resp = await fetch(`https://api.unsplash.com/photos/uTPYG4Bdiz0?client_id=sb1JgmtT99VPVFjTUsvcftFWSsLtYFa8cmMOSfW-WfM`);
    const data = await resp.json() as Room;
    dispatch({type:'ROOM_IMAGE', payload: data.urls.full})
  };

  useEffect(() => {
    if(roomView === 'hidden' || roomImage) return;
    fetchImage();
  }, [roomView]);

 return (
  <>
   {roomView && roomImage &&
   <>
    <div className={styles.image_container}>
      <Image src={roomImage} alt='room image' layout='fill' objectFit='cover' objectPosition='bottom'/>
    </div>
    <div className={styles.product_image}>
      <Image src={imageSrc} layout='fill' objectFit='contain' objectPosition='center' alt='product'/>
    </div>
   </>
   }
  </>
 );
};
 
export default RoomImage;
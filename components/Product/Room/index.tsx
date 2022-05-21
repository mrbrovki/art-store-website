import React, { FC, useContext } from 'react'
import { Context } from '../../../context';
import ProductImage from '../View/ProductImage'
import GoBackButton from './GoBack'
import RoomImage from './RoomImage'



const Room:FC<{imageSrc: string}> = ({imageSrc}) => {
  return (
    <>
     <GoBackButton />
     <RoomImage imageSrc={imageSrc}/>
    </>
  );
};

export default Room;
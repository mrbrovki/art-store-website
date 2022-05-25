import React, { FC } from 'react'
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
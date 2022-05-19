import React, {FC} from 'react';
import { PhotoProps } from '../../lib/Types';
// types
// components
// context
// styles
import Details from './Details';
import View from './View';
import Room from './Room';



const Product:FC<{photo: PhotoProps}> = ({photo}) => {
 const viewData = photo.src.original;
 const detailsData = {
  name: 'Wallowing Breeze',
  author: photo.photographer,
  info: {
   description: 'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
   physical_details: 'Oil on canvas, 2008\nGallety wrap canvas\n26 in x 23 in'
  },
  price: 620
 }; 

 return (
  <>
   <View imageSrc={viewData}/>
   <Details details={detailsData}/>
   <Room imageSrc={viewData}/>
  </>
 );
};
 
export default Product;
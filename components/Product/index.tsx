import React, {FC, useContext, useEffect} from 'react';
// types
import { Photo } from 'pexels';
// context
import { Context } from '../../context';
// components
import View from './View';
import Details from './Details';
import Room from './Room';



const Product:FC<{photo: Photo}> = ({photo}) => {
 const {dispatch} = useContext(Context)
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

 useEffect(()=>{
  dispatch({type: 'CURRENT_ITEM', payload: {
  id: photo.id,
  name: detailsData.name,
  author: detailsData.author,
  image: photo.src.small,
  price: detailsData.price
 }});
 }, [photo])
 
 return (
  <>
   <View imageSrc={viewData}/>
   <Details details={detailsData}/>
   <Room imageSrc={viewData}/>
  </>
 );
};
 
export default Product;
import React, {FC} from 'react';
// types
import { CollectionData, FeaturedArtist } from '../../lib/Types';
// components
import Artists from './Artists';
// styles
import styles from '../../styles/css/featured.module.css';
import AnimatedStick from './AnimatedStick';
import Paintings from './Paintings';



const Featured:FC<{artists: FeaturedArtist[], collectionData: CollectionData}> = ({artists, collectionData: {media}}) => {
 return (
  <>
   <Paintings media={media}/>
   <AnimatedStick />
   <Artists artists={artists}/>
  </>
 );
};
 
export default Featured;
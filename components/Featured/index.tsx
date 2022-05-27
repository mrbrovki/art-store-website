import React, {FC} from 'react';
// types
import { CollectionData, FeaturedArtist } from '../../lib/Types';
import AnimatedStick from './AnimatedStick';
// components
import Artists from './Artists';
// styles
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
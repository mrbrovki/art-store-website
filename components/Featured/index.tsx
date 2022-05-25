import React, {FC} from 'react';
// types
import { CollectionData, FeaturedArtist } from '../../lib/Types';
// components
import Artists from './Artists';
// styles
import Paintings from './Paintings';
import AnimatedStick from './AnimatedStick';



const Featured:FC<{artists: FeaturedArtist[], collectionData: CollectionData}> = ({artists, collectionData: {media}}) => {
 return (
  <>
   <Paintings media={media}/>
   <Artists artists={artists}/>
  </>
 );
};
 
export default Featured;
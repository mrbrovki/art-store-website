import React, {FC} from 'react';
import Image from 'next/image';
// components
import { FeaturedArtist } from '../../../lib/Types';
// styles
import styles from '../../../styles/css/featured_artists_artist.module.css';



const Artist:FC<{artistInfo:FeaturedArtist}> = ({artistInfo}) => {
 return (
  <div className={styles.artist}>
   <div className={styles.image_container}>
    <Image src={artistInfo.image} layout='fill' objectFit='cover' quality={30} alt='artist'/>
   </div>
   <p className={styles.artist_name}>{artistInfo.first_name} {artistInfo.last_name}</p>
   <p className={styles.artist_location}>{artistInfo.city}, {artistInfo.country}</p>
  </div>
 );
};
 
export default Artist;
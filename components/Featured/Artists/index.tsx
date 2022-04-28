import React, {FC} from 'react';
// types
import { FeaturedArtist } from '../../../lib/Types';
// components
import Artist from './Artist';
// context
// styles
import styles from '../../../styles/css/featured_artists.module.css';



const Artists:FC<{artists: FeaturedArtist[]}> = ({artists}) => {
 return (
  <section className={styles.artists_container}>
   <h2 className={styles.artists_heading}>featured artists</h2>
   <div className={styles.artists}>
    {artists.map(artist => {
     return(
      <Artist artistInfo={artist} key={artist.id}/>
     )
    })}
   </div>
  </section>
 );
};
 
export default Artists;
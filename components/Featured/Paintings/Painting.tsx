import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
// types
// components
// context
// styles
import styles from '../../../styles/css/featured_paintings_painting.module.css';



const Painting:FC<{src: string, id: number}> = ({src, id}) => {
 return (
   <Link href={`/paintings/${id}`} passHref>
    <a className={styles.painting_container}>
     <div className={styles.image_container}>
      <Image src={src} layout='fill' objectFit='contain' objectPosition='center' quality={30}lazyBoundary='300px'/>
     </div>
     <p className={styles.painting_name}>Wallowing Breeze</p>
     <p className={styles.artist_name}>Pablo Picasso</p>
    </a>
   </Link>
 );
};
 
export default Painting;
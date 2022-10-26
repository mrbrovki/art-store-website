import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
// styles
import styles from '../../../styles/css/featured_paintings_painting.module.css';



const Painting:FC<{src: string, id: number}> = ({src, id}) => {
 return (
   <Link href={`/paintings/${id}`} passHref>
    <a className={styles.painting_container}>
     <div className={styles.image_container}>
      <Image src={src} layout='fill' objectFit='contain' objectPosition='center' lazyBoundary='500px' alt='featured painting' quality={45}/>
     </div>
     <p className={styles.painting_name}>Wallowing Breeze</p>
     <p className={styles.artist_name}>Pablo Picasso</p>
    </a>
   </Link>
 );
};
 
export default Painting;
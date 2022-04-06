import type { GetStaticProps, NextPage } from 'next';
import { createClient } from 'pexels';
import {CollectionData} from '../lib/Types';
import Image from 'next/image';
import styles from '../styles/css/home.module.css';

export const getStaticProps:GetStaticProps = async () =>{
  const client = createClient(process.env.ENV_PEXELS_API_KEY as string);
  const collectionData = await client.collections.media({id:'luyg7mw'});
  return{
    props: {collectionData}
  }
}
const Home: NextPage<{collectionData: CollectionData}> = ({collectionData: {media}}) => {
  return (
    <>
      <h1 className={styles.category_name}>Featured Paintings</h1>
        <div className={styles.featured_container}>
          <div className={styles.images_wrapper} id={styles.wrapper_1}>
            {media.slice(0, 8).map(photo=>{
              return(
                <div key={photo.id} className={styles.image_container}>
                   <Image src={photo.src.medium} layout='fill' objectFit='contain' objectPosition='center' alt={photo.alt}/>
                </div>
              );
            })}
          </div>
          <div className={styles.images_wrapper}>
            {media.slice(8, 16).map(photo=>{
              return(
                <div key={photo.id} className={styles.image_container} id={styles.wrapper_2}>
                   <Image src={photo.src.medium} layout='fill' objectFit='contain' objectPosition='center' alt={photo.alt}/>
                </div>
              );
            })}
          </div>
        </div>
    </>
  )
}

export default Home;

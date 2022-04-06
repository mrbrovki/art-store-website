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
  const first = media.slice(0, 8);
  const second = media.slice(8, 16);
  console.log(first)
  return (
    <>
      <h1>Featured Paintings</h1>
      <section>
        <div className={styles.featured_container}>
          <span className={styles.wrapper}>
            {first.map(photo=>{
              return(
                <Image src={photo.src.large} layout={'fixed'} height={200} width={200} alt={photo.alt}/>
              );
            })}
          </span>
          <span className={styles.wrapper}>
            {second.map(photo=>{
              return(
                <Image src={photo.src.large} layout={'fixed'} height={200} width={200} alt={photo.alt}/>
              );
            })}
          </span>
        </div>
      </section>
    </>
  )
}

export default Home;

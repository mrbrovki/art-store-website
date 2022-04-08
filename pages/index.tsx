import type { GetStaticProps, NextPage } from 'next';
import { createClient } from 'pexels';
import {Avatars, CollectionData} from '../lib/Types';
import Image from 'next/image';
import styles from '../styles/css/home.module.css';
import { useState } from 'react';

export const getStaticProps:GetStaticProps = async () =>{
  const client = createClient(process.env.ENV_PEXELS_API_KEY as string);
  const collectionData = await client.collections.media({id:'luyg7mw'});
  const avatars:Avatars = await (await fetch('https://my-json-server.typicode.com/mrbrovki/demo/avatars')).json();
  return{
    props: {collectionData, avatars}
  }
}
const Home: NextPage<{collectionData: CollectionData, avatars: Avatars}> = ({collectionData: {media}, avatars}) => {
  return (
    <>
      <h1 className={styles.category_name}>Featured Paintings</h1>
      <div className={styles.featured_paintings_container}>
          <div className={styles.images_wrapper} id={styles.wrapper_1}>
            {media.slice(0, 8).map(photo=>{
              return(
                <div key={photo.id} className={styles.image_container}>
                  <div className={styles.image}>
                    <Image src={photo.src.medium} layout='responsive' width={photo.width} height={photo.height} alt={photo.alt} quality={50}/>
                  <p className={styles.image_name}>Wallowing Breeze</p>
                  <p className={styles.artist_name}>Pablo Picasso</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.images_wrapper } id={styles.wrapper_2}>
            {media.slice(8, 16).map(photo=>{
              return(
                <div key={photo.id} className={styles.image_container}>
                  <div className={styles.image}>
                    <Image src={photo.src.medium} layout='responsive' width={photo.width} height={photo.height} alt={photo.alt} quality={50}/>
                  <p className={styles.image_name}>Wallowing Breeze</p>
                  <p className={styles.artist_name}>Pablo Picasso</p>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
      <section className={styles.featured_artists_container}>
            <h2 className={styles.featured_heading}>featured artists</h2>
            <div className={styles.flex_container}>
              {avatars.map(avatar =>{
                return(
                  <div key={avatar.id} className={styles.avatar_container}>
                    <div className={styles.avatar_image}>
                    <Image src={avatar.image} layout='intrinsic' width={80} height={80}/>
                    </div>
                    <div className={styles.info}>
                      <p className={styles.avatar_name}>{avatar.first_name + ' ' + avatar.last_name}</p>
                      <p className={styles.avatar_location}>{avatar.city + ', ' + avatar.country}</p>
                    </div>
                    </div>
                );
              })}
            </div>
      </section>
    </>
  )
}

export default Home;

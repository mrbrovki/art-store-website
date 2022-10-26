import React from 'react';
import { GetStaticProps, NextPage } from "next";
import { createClient } from 'pexels';
//  types
import { CollectionData, FeaturedArtist } from '../lib/Types';
// components
import Featured from '../components/Featured';



export const getStaticProps:GetStaticProps = async () => {
  const artists:FeaturedArtist[] = await (await fetch('https://my-json-server.typicode.com/mrbrovki/demo/avatars')).json();
  const client = createClient(process.env.ENV_PEXELS_API_KEY as string);
  const collectionData = await client.collections.media({id:'1pkem4a'});
  return { 
    props: {artists, collectionData}
  };
};

const Home:NextPage<{artists: FeaturedArtist[], collectionData: CollectionData}> = ({artists, collectionData}) => {
  return (
    <>
      <Featured artists={artists} collectionData={collectionData}/>
    </>
  );
};

export default Home;

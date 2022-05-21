import React from 'react';
import { client } from '../context';
import { GetStaticProps, NextPage } from "next";
//  types
import { CollectionData, FeaturedArtist } from '../lib/Types';
// components
import Featured from '../components/Featured';



export const getStaticProps:GetStaticProps = async () => {
  const artists:FeaturedArtist[] = await (await fetch('https://my-json-server.typicode.com/mrbrovki/demo/avatars')).json();
  const collectionData = await client.collections.media({id:'luyg7mw'});
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

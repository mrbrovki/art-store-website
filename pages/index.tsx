import type { GetStaticProps, NextPage } from 'next';
import { createClient } from 'pexels';
import {CollectionData} from '../lib/Types';
import Image from 'next/image';

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
      <h1>Featured Paintings</h1>
      <section>
      </section>
    </>
  )
}

export default Home;

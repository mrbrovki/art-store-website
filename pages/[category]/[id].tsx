import React from 'react';
import { client } from '../../context';
//  types
import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps, NextPage } from 'next';
import {Photo} from 'pexels';
// components
import Product from '../../components/Product';


export const getServerSideProps:GetServerSideProps = async (context) => {
  const {id}:ParsedUrlQuery = context.query;
  if(!id) return{
    props: {}
  };
  const photo = await client.photos.show({id: id.toString()});
  return{
    props: {photo}
  };
};


const ProductPage:NextPage<{photo: Photo}> = ({photo}) => {
  return (
    <>
      <Product photo={photo}/>
    </>
  );
};

export default ProductPage;
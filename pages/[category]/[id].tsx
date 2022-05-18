import React from 'react';
//  types
import { GetServerSideProps, NextPage } from 'next';
import {PhotoProps} from '../../lib/Types';
// components
// context
// styles
import Product from '../../components/Product';
import { ParsedUrlQuery } from 'querystring';
import { client } from '../../context';

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


const ProductPage:NextPage<{photo: PhotoProps}> = ({photo}) => {
  return (
    <>
      <Product photo={photo}/>
    </>
  );
};

export default ProductPage;
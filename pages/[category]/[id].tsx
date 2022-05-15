import React from 'react';
//  types
import { GetServerSideProps, NextPage } from 'next';
import {PhotoProps} from '../../lib/Types';
// components
// context
// styles
import styles from '../../styles/css/product.module.css';
import Product from '../../components/Product';
import { client } from '../../context';
import { ParsedUrlQuery } from 'querystring';

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
      <Product data={photo}/>
    </>
  );
};

export default ProductPage;
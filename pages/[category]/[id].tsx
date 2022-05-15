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
import { Photo } from 'pexels';

export const getServerSideProps:GetServerSideProps = async (context) => {
  const {id}= context.query;
  const photo = await client.photos.show({id}) as PhotoProps;
  return{
    props: {photo}
  };
};


const ProductPage:NextPage<{photo: PhotoProps}> = ({photo}) => {
  console.log(photo)
  return (
    <>
      <Product data={photo}/>
    </>
  );
};

export default ProductPage;
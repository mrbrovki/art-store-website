import React from 'react';
//  types
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { CategoryName } from '../../lib/Types';
import { ParsedUrlQuery } from 'querystring';
// components
import Category from '../../components/Category';
// constants
import { categories } from '../../lib/constants';


export const getStaticPaths:GetStaticPaths = () => {
 const paths = categories.map(category => {
  return {params: {category: category}}
 });

 return {
  paths,
  fallback: false
 };
};

export const getStaticProps:GetStaticProps = (context) => {
  const {category} = context.params as ParsedUrlQuery;
  const pexelsKey = process.env.ENV_PEXELS_API_KEY as string;
  return {
    props:{category, pexelsKey}
  };
};

const CategoryPage:NextPage<{category: CategoryName, pexelsKey: string}> = (props) => {
  return (
    <Category {...props}/>
  );
};

export default CategoryPage;
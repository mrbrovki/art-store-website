import React from 'react';
//  types
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Categories } from '../../lib/Types';
import { ParsedUrlQuery } from 'querystring';
// components
import Category from '../../components/Category';
//utils
import { categories } from '../../lib/utils';


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
  return {
    props:{category}
  };
};

const CategoryPage:NextPage<{category: Categories}> = ({category}) => {
  return (
    <Category category={category}/>
  );
};

export default CategoryPage;
import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

export const getStaticPaths:GetStaticPaths = async () =>{
 const categories = ['paintings', 'drawings', 'sculptures', 'artists'];
 const paths = categories.map(category =>{
  return{params: {category}}
 })
 return {
  paths,
  fallback: false
 }
}

export const getStaticProps:GetStaticProps = async () =>{
 return{props:{}}
}

const Category:NextPage = () => {
  return (
    <div>index</div>
  )
}

export default Category;
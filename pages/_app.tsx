import React from 'react';
//  types
import { AppProps } from 'next/app';
//  components
import Layout from '../components/Layout';
//  context
//  styles
import '../styles/css/globals.css';



const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ); 
};

export default MyApp;

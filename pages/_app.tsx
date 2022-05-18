import React from 'react';

//  types
import { AppProps } from 'next/app';
//  components
import Layout from '../components/Layout';
//  context
//  styles
import '../styles/css/globals.css';
import AppContext from '../context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <AppContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext>
  ); 
};

export default MyApp;

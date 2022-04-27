import React, { ReactNode, FC } from 'react';
// types
// components
import Header from './Header';
import Main from './Main';
// context
// styles



const Layout:FC<{children: ReactNode}> = ({children}) => {
  return( 
    <>
      <Header />
      <Main>
        {children}
      </Main>
    </>
  );
};

export default Layout;
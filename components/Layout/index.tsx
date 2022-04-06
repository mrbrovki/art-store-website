import { ReactNode, FC } from 'react';
import Header from './Header';
import Main from './Main';

const Layout:FC<{children: ReactNode}> = ({children}) => {
  return( 
  <>
    <Header />
    <Main>
      {children}
    </Main>
  </>)
}

export default Layout;
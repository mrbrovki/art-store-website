import React, { FC, ReactNode } from 'react';
// types
// components
// context
// styles
import styles from '../../styles/css/main.module.css';



const Main:FC<{children: ReactNode}> = ({children}) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Main;
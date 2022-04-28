import React, { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//  types
//  components
//  const
import { categories } from '../../../lib/categories';
//  context
//  styles
import styles from '../../../styles/css/navigation.module.css';



const Navigation:FC = () => {
  const [navVisibility, setNavVisibility] = useState<'hidden'|'shown'>('hidden');
  const toggleNav = () => setNavVisibility(prev => prev === 'hidden' ? 'shown' : 'hidden');
  return (
    <>
    <div className={styles.hamburger} onClick={toggleNav}>
      <Image src='/assets/hamburger.svg' width={24} height={24} />
    </div>
    <nav className={styles.nav_container + ' ' + styles[navVisibility]}>
      <ul>
        {categories.map(category => {
          return(
            <li className={styles.list_container} key={category}>
              <Link href={`/${category}`}>
                <a>{category}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
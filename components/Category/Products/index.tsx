import React, { FC, useCallback, useEffect, useState, useRef, useContext } from 'react';
// types
import { PhotosWithTotalResults } from 'pexels';
import { CategoryName, SearchQuery } from '../../../lib/Types';
// components
import Product from './Product';
// constants
import {intersectionOption, per_page } from '../../../lib/constants';
// context
import { Context } from '../../../context';
// styles
import styles from '../../../styles/css/category_products.module.css';


const Products: FC<{ category: CategoryName, pexelsKey: string }> = ({ category: name, pexelsKey }) => {
  const {state: {photos, pages}, dispatch} = useContext(Context);
  const [query, setQuery] = useState<SearchQuery>('');
  const loader = useRef(null);
  const fetchData = async () => {
    if (!query) return;
    console.log('render')
    const res = await fetch(`https://api.pexels.com/v1/search/?page=${pages[name]}&per_page=${per_page}&query=${query}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': pexelsKey as string
      }
    });
    const data = await res.json() as PhotosWithTotalResults;
    dispatch({type: 'PHOTOS', payload: {...photos, [name]: [...photos[name], ...data.photos]}});
  };
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      dispatch({type: 'PAGES', payload: name});
    }
  }, [name]);

  //  observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, intersectionOption);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  // set query
  useEffect(() => {
    if (!name) return;
    switch (name) {
      case 'paintings':
        setQuery('abstract');
        break;
      case 'drawings':
        setQuery('illustration');
        break;
      case 'sculpture':
        setQuery('sculpture');
        break;
      default:
        setQuery('');
        break;
    }
  }, [name])

  // fetching data
  useEffect(() => {
    fetchData();
  }, [pages]);

  return (
    <>
      <div className={styles.products_container}>
        {photos[name].map(photo => {
          const { src: { large: imageSrc }, photographer: author, id } = photo;
            return (
              <Product imageSrc={imageSrc} name={'Wallowing Breeze'} author={author} id={id} key={name+id} />
            );
        })}
      </div>
      <div ref={loader}></div>
    </>
  );
};

export default Products;
import React, { FC, useCallback, useEffect, useState, useRef } from 'react';
// types
import { Photo, PhotosWithTotalResults } from 'pexels';
import { CategoryName, Category, SearchQuery } from '../../../lib/Types';
// components
import Product from './Product';
// constants
import { intersectionOption, per_page } from '../../../lib/constants';
// styles
import styles from '../../../styles/css/category_products.module.css';

const initPhotos = {
  paintings: [],
  drawings: [],
  sculpture: []
};

const initPageNum = {
  paintings: 0,
  drawings: 0,
  sculpture: 0
};


const Products: FC<{ category: CategoryName, pexelsKey: string }> = ({ category: name, pexelsKey }) => {
  const [query, setQuery] = useState<SearchQuery>('');
  const [photos, setPhotos] = useState<Category<Photo[]>>(initPhotos);
  const [pageNum, setPageNum] = useState<Category<number>>(initPageNum);
  const loader = useRef(null);
  const fetchData = async () => {
    if (!query) return;
    const res = await fetch(`https://api.pexels.com/v1/search/?page=${pageNum[name]}&per_page=${per_page}&query=${query}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': pexelsKey as string
      }
    });
    const data = await res.json() as PhotosWithTotalResults;
    setPhotos(prev => {
      return {...prev, [name]: [...prev[name] , ...data.photos]};
    });
  };
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNum(prev => {
        return(
          {...prev, [name]: prev[name] + 1}
        )
      });
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
  }, [pageNum]);

  return (
    <>
      <div className={styles.products_container}>
        {photos[name].map(photo => {
          const { src: { large: imageSrc }, photographer: author, id } = photo;
            return (
              <Product imageSrc={imageSrc} name={'Wallowing Breeze'} author={author} id={id} key={id} />
            );
        })}
      </div>
      <div ref={loader}></div>
    </>
  );
};

export default Products;
import React, {FC, useCallback, useEffect, useState, useRef} from 'react';
import { Photo, PhotosWithTotalResults } from 'pexels';
// types
import { Categories, PhotoProps, SearchQuery } from '../../../lib/Types';
// components
import Product from './Product';
// constants
import { intersectionOption, per_page } from '../../../lib/constants';
// styles
import styles from '../../../styles/css/category_products.module.css';




const Products:FC<{categoryName: Categories}> = ({categoryName: name}) => {
  const [query, setQuery] = useState<SearchQuery>();
  const [photos, setPhotos] = useState<Photo[]>();
  const [pageNum, setPageNum] = useState(0);
  const loader = useRef(null);
  
  const fetchData = async () => {
    if(!query) return;
    const res = await fetch(`https://api.pexels.com/v1/search/?page=${pageNum}&per_page=${per_page}&query=${query}`, {
    method: 'GET',
    headers: {
     'content-type': 'application/json',
    'Authorization': '563492ad6f9170000100000130ea875f314545468bc8864c0008d7a5'
    }});
    const data = await res.json() as PhotosWithTotalResults;
    setPhotos(prev => {
      if(prev){
        return [...prev, ...data.photos] as Photo[];
      }else{
        return data.photos;
      }
    });
  };
  const handleObserver = useCallback((entries:IntersectionObserverEntry[]) => {
    const target = entries[0];
    if(target.isIntersecting) {
      setPageNum(prev => prev + 1);
    }
  }, []);

  useEffect(()=>{
    const observer = new IntersectionObserver(handleObserver, intersectionOption);
    if(loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  // set query
  useEffect(()=>{
    if(!name) return;
    switch(name){
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

  useEffect(()=>{
    fetchData();
  }, [pageNum]);
  
  useEffect(()=>{
    setPageNum(0);
    setPhotos([]);
  },[query]);
 return (
  <>
    <div className={styles.products_container}>
      {photos?.map((photo, index) => {
        const {src: {original: imageSrc}, photographer: author, id} = photo;
        if(index === per_page - 1){
          <Product imageSrc={imageSrc} name={'Wallowing Breeze'} author={author} id={id} key={id}/>
        }else{
          return(
          <Product imageSrc={imageSrc} name={'Wallowing Breeze'} author={author} id={id} key={id}/>
        );
        }
      })}
    </div>
    <div ref={loader}></div>
  </>
 );
};
 
export default Products;
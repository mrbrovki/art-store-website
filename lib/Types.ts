import { Photo } from "pexels";

export type Media = (Photo & {type: "Photo"})[];

export interface CollectionData{
  page: number;
  per_page: number;
  total_results: number;
  media: Media;
};


export interface State{
  roomView: 'visible' | 'hidden';
  photos: Category<Photo[]>;
  pages:Category<number>;
};

export type Action = 
| {type: 'ROOM', payload: 'visible' | 'hidden'}
| {type: 'PHOTOS', payload: Category<Photo[]>}
| {type: 'PAGES', payload: CategoryName}

export interface AppContextProps<T>{
 children: T;
};

export interface FeaturedArtist{
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  city: string;
  country: string;
};

export interface DetailsData<T>{
  name: T;
  author: T;
  info: {
    description:T;
    physical_details:T;
  };
  price: number;
} ;

export type CategoryName = 'paintings' | 'drawings' | 'sculpture';
export type SearchQuery = 'abstract' | 'illustration' | 'sculpture' | '';


export interface CategoryProduct{
  imageSrc: string;
  name: string;
  author: string;
  id: number;
};

export interface Category<T>{
  paintings: T;
  drawings: T;
  sculpture: T;
}
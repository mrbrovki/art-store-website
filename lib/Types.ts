export interface PhotoProps {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: string;
  liked: boolean;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
};

export type Media = (PhotoProps & {type: "Photo"})[];
export interface CollectionData{
    page: number;
    per_page: number;
    total_results: number;
    media: Media;
};


export interface State{
  room: 'visible' | 'hidden';
};
export type Action = 
| {type: 'ROOM', payload: 'visible' | 'hidden'}

export interface AppContextProps<T>{
 children:T;
}

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
} 

export type Categories = 'paintings' | 'drawings' | 'sculpture';
export type SearchQuery = 'abstract' | 'illustration' | 'sculpture' | '';

export interface PaginationObject{
  next_page: string;
  page: number;
  per_page: number;
  photos: PhotoProps[];
};

export interface CategoryProduct{
  imageSrc: string;
  name: string;
  author: string;
  id: number
}
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


export interface State{};
export type Action = 
| {type: unknown; payload: unknown}

export interface AppContextProps<T>{
 children:T;
}

export interface FeaturedArtist{
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  city: string;
  country: string
};
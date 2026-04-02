import { CategoryName, FeaturedArtist, State } from "./Types";
export const per_page = 15;
export const intersectionOption = {
 root: null,
 rootMargin: "400px",
 threshold: 0
};

export const featuredArtists: FeaturedArtist[] = [
  { id: 1, image: 'https://picsum.photos/seed/artist1/300/300', first_name: 'Elena', last_name: 'Vasquez', city: 'Madrid', country: 'Spain' },
  { id: 2, image: 'https://picsum.photos/seed/artist2/300/300', first_name: 'James', last_name: 'Morrison', city: 'New York', country: 'USA' },
  { id: 3, image: 'https://picsum.photos/seed/artist3/300/300', first_name: 'Yuki', last_name: 'Nakamura', city: 'Tokyo', country: 'Japan' },
];

export const categories:CategoryName[] = ['paintings', 'drawings', 'sculpture'];

export const initPhotos = {
  paintings: [],
  drawings: [],
  sculpture: []
};

export const initPages = {
  paintings: 0,
  drawings: 0,
  sculpture: 0
};

 export const initState:State = {
  roomView: 'hidden',
  photos: initPhotos,
  pages: initPages,
  isCartVisible: false,
  isOverlay: false,
  currentItem: {
    id: 0,
    author: '',
    name: '',
    price: 0,
    image: ''
  },
  roomImage: '',
  items: []
};
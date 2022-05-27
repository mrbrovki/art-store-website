import { CategoryName, State } from "./Types";
export const per_page = 15;
export const intersectionOption = {
 root: null,
 rootMargin: "400px",
 treshold: 0
};

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
  pages: initPages
};
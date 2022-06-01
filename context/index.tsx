import React, {createContext, Dispatch, FC, ReactNode, useReducer} from 'react';
//  constants
import { initState } from '../lib/constants';
// types 
import { State, Action, AppContextProps } from '../lib/Types';

interface ContextProps{
 state: State;
 dispatch: Dispatch<Action>;
};

export const Context = createContext<ContextProps>({state: initState, dispatch: () => {}});

const AppContext:FC<AppContextProps<ReactNode>> = ({children}) => {
 const reducer = <T extends State>(state: T, action: Action):T =>{
  const {type, payload} = action;
  switch(type){
    case 'ROOM':
      return {...state, roomView: payload}
    case 'PHOTOS':
      return {...state, photos: payload};
    case 'PAGES':
      return {...state, pages: {...state.pages, [payload]: state.pages[payload] + 1}};
    case 'OVERLAY':
      return {...state, isOverlay: payload};
    case 'CART':
      return {...state, isCartVisible: payload};
    case 'ADD_TO_CART':
      return {...state, items: [...state.items, payload]};
    case 'REMOVE_ITEM':
      const newItems = state.items.filter(item => item.id !== payload);
      return {...state, items: newItems};
    case 'CURRENT_ITEM':
      return {...state, currentItem: payload};
   default:
    return{...state};
  }
 };
 const [state, dispatch] = useReducer(reducer, initState);
 return (
  <Context.Provider value={{state, dispatch}}>
   {children}
  </Context.Provider>
 );
};

export default AppContext;
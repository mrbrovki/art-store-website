import React, {createContext, Dispatch, FC, ReactNode, useReducer} from 'react';
// types 
import { State, Action, AppContextProps } from '../lib/Types';
import {createClient} from 'pexels';

interface ContextProps{
 state: State;
 dispatch: Dispatch<Action>;
};
const initState:State = {
  roomView: 'hidden'
};
export const Context = createContext<ContextProps>({state: initState, dispatch: () => {}});
const pexelsKey = process.env.ENV_PEXELS_API_KEY as string;
export const client = createClient('563492ad6f9170000100000130ea875f314545468bc8864c0008d7a5');

const AppContext:FC<AppContextProps<ReactNode>> = ({children}) => {
 const reducer = <T extends State>(state: T, action: Action):T =>{
  const {type, payload} = action;
  switch(type){
    case 'ROOM':
      return {...state, roomView: payload}
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
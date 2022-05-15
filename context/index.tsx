import React, {createContext, Dispatch, FC, ReactNode, useReducer} from 'react';
import { createClient } from 'pexels';
// types 
import { State, Action, AppContextProps } from '../lib/Types';

interface ContextProps{
 state: State;
 dispatch: Dispatch<Action>;
};
const initState:State = {};
export const Context = createContext<ContextProps>({state: initState, dispatch: () => {}});

const pexelsKey = process.env.ENV_PEXELS_API_KEY as string;
export const client = createClient(pexelsKey);

const AppContext:FC<AppContextProps<ReactNode>> = ({children}) => {
 const reducer = <T extends State>(state: T, action: Action):T =>{
  const {type, payload} = action;
  switch(type){
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
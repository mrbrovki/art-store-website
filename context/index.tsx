import React, {createContext, Dispatch, FC, ReactNode, useReducer} from 'react';
// types 
import { State, Action, AppContextProps } from '../lib/Types';

interface ContextProps{
 state: State;
 dispatch: Dispatch<Action>;
};
const initState:State = {};
export const Context = createContext<ContextProps>({state: initState, dispatch: () => {}});



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
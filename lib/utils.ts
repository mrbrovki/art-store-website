import { Dispatch } from "react";
import { Action } from "./Types";

export const toggleRoomView = (currentMode: string, dispatch: Dispatch<Action>) => {
 const newMode = currentMode === 'visible' ? 'hidden' : 'visible';
 dispatch({type: 'ROOM', payload: newMode});
};

export const idMatch = <T extends {id: number}>(obj:T, arr:T[]):boolean => {
 return arr.some(arrObj=>arrObj.id === obj.id);
}
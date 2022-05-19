import { Dispatch } from "react";
import { Action, Categories } from "./Types";

export const toggleRoomView = (currentMode: string, dispatch: Dispatch<Action>) => {
 const newMode = currentMode === 'visible' ? 'hidden' : 'visible';
 dispatch({type: 'ROOM', payload: newMode});
};

export const categories:Categories[] = ['paintings', 'drawings', 'sculpture'];
import { combineReducers } from 'redux';
import counter, { ICounter } from './counter/reducer'; 
import xframeignore , {IXFignore} from './xframeignore/reducer' ; 

import 'redux';
// Enhance the Action interface with the option of a payload.
// While still importing the Action interface from redux.
declare module 'redux' {
	export interface Action<T = any, P = any> {
		type: T;
		payload?: P;
	}
}

/*
	Interface that defines the allowable app state  KEYS and their
	types 

	NOTE: the sub folders in the background/store/* directories 
	basically define the actions and interface for the STATE modifications 
	at those keywords (state.counter , state.settings, etc...)

	Defining actions there is helpful as well because the content script
	UI components can import them to dispatch their actions 

*/
export interface IAppState {
	counter: ICounter;
	xframeignore : IXFignore ; 
}

const reducers = combineReducers<IAppState>({
	counter,
	xframeignore 
});

export default reducers;








/* 
STUFF FOR SAVING STATE 
*/



type OnSuccess = () => void;
type OnError = (e: Error) => void;



export const loadState = (): IAppState | undefined => {
	try {
		const serializedState = localStorage.getItem('appstate');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (appstate: IAppState, success: OnSuccess = () => {}, error: OnError = () => {}) => {
	try {
		const serializedState = JSON.stringify(appstate);
		localStorage.setItem('appstate', serializedState);
		success();
	} catch (e) {
		error(e);
	}
};

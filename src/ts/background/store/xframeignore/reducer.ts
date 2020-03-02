import { Reducer} from 'redux';
import { XFActions } from './actions'; 

export interface IXFignore {
	allowed_urls : string[] , 
}

const initialState: IXFignore = {
	allowed_urls : []  , 
};

const log =  console.log  

const xframeignore : Reducer<IXFignore, XFActions> = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case 'ALLOW':
			log('received allow request for: ' + payload) 
			state.allowed_urls.push((payload as string))
			return { ...state, allowed_urls: state.allowed_urls } 

		case 'BLOCK':
			// tslint:disable-next-line: no-console
			log('received block request for: ' + payload) 		
			const newUrls = state.allowed_urls.filter(url => (url !== payload) )	
			return { ...state, allowed_urls : newUrls  } 

		default:
			return state;
	}
};

export default xframeignore; 

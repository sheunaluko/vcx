import { Reducer} from 'redux';
import { CounterActions } from './actions';

export interface ICounter {
	clicksMade: number;
}

const initialState: ICounter = {
	clicksMade: 0
};

const counter: Reducer<ICounter, CounterActions> = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case 'INCREMENT':
			console.log('incremented!')
			return { ...state, clicksMade: state.clicksMade + (payload || 1) };

		case 'DECREMENT':
			// tslint:disable-next-line: no-console
			console.log('decrement!')
			return { ...state, clicksMade: state.clicksMade - (payload || 1) };

		default:
			return state;
	}
};

export default counter;

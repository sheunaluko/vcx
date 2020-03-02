import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import {Content} from './Content' 

import { createDomAnchor } from '../../scripts/dom';

createDomAnchor('main-root');
const store = new Store();



store.ready().then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<Content /> 
		</Provider>
		, document.getElementById('main-root'));
});

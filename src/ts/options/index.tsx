import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
// import OptionsApp from './containers/OptionsApp';

const store = new Store();

store.ready().then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<h1> Options </h1>  
		</Provider>
		, document.getElementById('options-root'));
});

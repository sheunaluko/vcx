import * as React from 'react';
import { useSelector ,useDispatch } from 'react-redux';

import {allow,block } from '../../background/store/xframeignore/actions' 
import {IAppState} from '../../background/store/index' 


export function Content() {

	const dispatch = useDispatch()  
	const allowed = useSelector(state=> (state as IAppState).xframeignore.allowed_urls )


	function _allow() {
		console.log('Clicked allow') 
		console.log('Sending action') 
		// tslint:disable-next-line: quotemark
		dispatch(allow('https://www.google.com')) 
	}
	
	function _block() {
		console.log('Clicked block') 
		console.log('Sending action') 
		dispatch(block('https://www.google.com'))   
	}

	return (
		<div>
			<h1>Control headers</h1>
			<button onClick={_allow}>ALLOW</button>  
			<button onClick={_block}>BLOCK</button>  			 
			<p>Currently allowed: { allowed.length ? allowed.join(' ') : 'none'}</p> 
		</div>
	)
}

/*
const mapStateToProps = (state: IAppState) => {
	return {
		counter: state.counter,
	};
};
*/ 
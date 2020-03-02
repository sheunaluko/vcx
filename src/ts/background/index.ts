import { createStore } from 'redux';
import { wrapStore } from 'webext-redux';
import { configureApp } from './AppConfig';
import reducers, { loadState } from './store';

const preloadedState = loadState();
const store = createStore(reducers, preloadedState);

configureApp(store);
wrapStore(store);



declare var window : any 

window.appStore  = store   
const log = console.log 

// logic here for filtering requests
// DYNAMICALLY CHECKS THE APP STORE  


function matchesAtleastOnePattern(patterns : string[], toMatch : string) { 
	return patterns.map((x)=>toMatch.match(x)).reduce( (a,b)=> (a||b) ) 
}

function myFilter(details : chrome.webRequest.WebResponseHeadersDetails)  { 

	const headers  = details.responseHeaders 

	// get the currently allowed urls 
	const allowed_urls = store.getState().xframeignore.allowed_urls

	const url  = details.url 	

	log('running filter for url' + url)  
	log('allowed urls:') 
	log(allowed_urls) 



	const filtered = (headers as any[]).filter((header) => {   

		// if nothing to filter then return 
		if (! allowed_urls.length)  {
			return true 
		}

		const matches = matchesAtleastOnePattern(allowed_urls,url) 
		if (matches) { 
			log('Found url match for: ' + url)  
		} else { 
			return true 
		}

		const foundXframe =  (header.name.toLowerCase() === 'x-frame-options')   

		if (foundXframe)  { 
			log('Found an xframe header from url : ' + details.url)  
			log('Will remove it')
			return false 
		} else { 
			return true 
		} 
		
	}) 


	return {
		responseHeaders  : filtered 
	} 
}


chrome.webRequest.onHeadersReceived.addListener(
	 myFilter , {
	  urls: ['<all_urls>']
	}, ['blocking', 'responseHeaders']);



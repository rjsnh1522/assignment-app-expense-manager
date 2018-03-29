import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {userLoggedIn} from './actions/auth';
import './style.css';
import setAuthHeaders from './utils/setAuthHeaders'

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

if (localStorage.expenseUserToken){
	const user = {token:localStorage.expenseUserToken};
	setAuthHeaders(localStorage.expenseUserToken)
	store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App}/>
		</Provider>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();

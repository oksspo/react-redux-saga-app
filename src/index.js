import React from "react";
import ReactDOM from "react-dom";
import Provider from "react-redux/lib/components/Provider";
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from "./redux/rootReducer";
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(thunk, saga),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

saga.run(sagaWatcher);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import {rootReducer} from "./redux/rootReducer";
import {sagaWatcher} from "./redux/sagas";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import App from './App';

import SignInForm from "./components/SignIn";
import PostForm from "./components/PostForm";
import CommentForm from "./components/CommentForm";
import Posts from "./components/Posts";
import './index.css';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

export const history = createBrowserHistory();

const saga = createSagaMiddleware();

const store = createStore(rootReducer(history), compose(applyMiddleware(thunk, saga, routerMiddleware(history)),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

saga.run(sagaWatcher);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App>
					<Switch>
						<Route exact path="/" component={SignInForm} />
						<Route path="/add-post" component={PostForm} />
						<Route path="/add-comment" component={CommentForm} />
						<Route path="/list" component={Posts} />
					</Switch>
				</App>
			</ConnectedRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
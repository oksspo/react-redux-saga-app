import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { rootReducer } from "./reducers/rootReducer";
import { sagaWatcher } from "./sagas/rootSagas";
import App from './App';
import SignInForm from "./components/SignIn";
import PostForm from "./components/PostForm";
import CommentForm from "./components/CommentForm";
import Review from "./components/Review";
import NotFound from "./components/NotFound";
import './index.css';

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
						<Route path="/review" component={Review} />
						<Route component={NotFound} />
					</Switch>
				</App>
			</ConnectedRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
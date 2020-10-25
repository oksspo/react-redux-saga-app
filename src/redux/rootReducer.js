import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {appReducer} from "./appReducer";
import { connectRouter } from 'connected-react-router';

export const rootReducer = (history) => combineReducers({
	user: authReducer,
	app: appReducer,
	router: connectRouter(history)
});
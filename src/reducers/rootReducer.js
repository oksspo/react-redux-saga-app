import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import { authReducer } from "./authReducer";
import { postReducer } from "./postReducer";

export const rootReducer = (history) => combineReducers({
	router: connectRouter(history),
	user: authReducer,
	post: postReducer
});
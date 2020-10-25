import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import { authReducer } from "./authReducer";
import { postReducer } from "./postReducer";

export const rootReducer = (history) => combineReducers({
	user: authReducer,
	post: postReducer,
	router: connectRouter(history)
});
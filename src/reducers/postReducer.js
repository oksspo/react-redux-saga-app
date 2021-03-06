import {CLEAR_DATA, HIDE_CONFIRMATION, SHOW_CONFIRMATION} from "../types/rootTypes";
import { UPDATE_COMMENT, UPDATE_POST } from "../types/postTypes";

const initialState = {
	id: '',
	title: '',
	body: '',
	comments: [],
	showConfirmation: false
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST:
			return {
				...state,
				...action.payload
			};
		case UPDATE_COMMENT:
			return {
				...state,
				comments: state.comments.concat([action.payload])
			};
		case SHOW_CONFIRMATION:
			return {
				...state,
				showConfirmation: true
			};
		case HIDE_CONFIRMATION:
			return {
				...state,
				showConfirmation: false
			};
		case CLEAR_DATA:
			return initialState;
		default:
			return state;
	}
};
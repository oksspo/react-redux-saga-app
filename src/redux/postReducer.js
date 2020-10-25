import {HIDE_CONFIRMATION, RESTART, SHOW_CONFIRMATION, UPDATE_COMMENT, UPDATE_POST} from "./types";

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
		case RESTART:
			return initialState;
		default:
			return state;
	}
};
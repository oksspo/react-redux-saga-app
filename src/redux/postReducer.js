import { UPDATE_COMMENT, UPDATE_POST } from "./types";

const initialState = {
	id: '',
	title: '',
	body: '',
	comments: []
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
		default:
			return state;
	}
};
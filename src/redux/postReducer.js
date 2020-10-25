import {ADD_POST} from "./types";

const initialState = {
	id: '',
	title: '',
	text: ''
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...action.payload
			};
		default:
			return state;
	}
};
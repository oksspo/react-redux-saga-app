import {SIGN_IN, USER_NOT_EXIST} from "./types";

const initialState = {
	id: '',
	name: '',
	email: '',
	userNotExist: false
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...action.payload,
				userNotExist: false
			};
		case USER_NOT_EXIST:
			return {...state, userNotExist: true};
		default:
			return state;
	}
};
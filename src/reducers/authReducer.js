import { CURRENT_USER, USER_NOT_EXIST } from "../types/authTypes";

const initialState = {
	id: '',
	name: '',
	email: '',
	userNotExist: false
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case CURRENT_USER:
			return {
				id: action.payload.id,
				name: action.payload.name,
				email: action.payload.email,
				userNotExist: false
			};
		case USER_NOT_EXIST:
			return {...state, userNotExist: true};
		default:
			return state;
	}
};
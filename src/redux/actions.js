import {REQUEST_USER, SIGN_IN, USER_NOT_EXIST} from "./types";

export function signIn(userCredentials) {
	return {
		type: REQUEST_USER,
		payload: userCredentials
	}
}

export function userNotExist() {
	return {
		type: USER_NOT_EXIST
	}
}
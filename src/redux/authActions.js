import {SIGN_IN, SIGN_OUT, USER_NOT_EXIST} from "./types";

export function signIn(userCredentials) {
	return {
		type: SIGN_IN,
		payload: userCredentials
	}
}

export function signOut() {
	return {
		type: SIGN_OUT
	}
}

export function userNotExist() {
	return {
		type: USER_NOT_EXIST
	}
}
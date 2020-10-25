import {NEXT_STEP, SIGN_IN, USER_NOT_EXIST} from "./types";

export function signIn(userCredentials) {
	return {
		type: SIGN_IN,
		payload: userCredentials
	}
}

export function userNotExist() {
	return {
		type: USER_NOT_EXIST
	}
}

export function nextStep(path) {
	return {
		type: NEXT_STEP,
		payload: path
	}
}
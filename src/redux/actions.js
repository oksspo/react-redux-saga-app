import {ADD_COMMENT, ADD_POST, NEXT_STEP, RESTART, SIGN_IN, SIGN_OUT, USER_NOT_EXIST} from "./types";

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

export function restart() {
	return {
		type: RESTART
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

export function addPost(post) {
	return {
		type: ADD_POST,
		payload: post
	}
}

export function addComment(comment) {
	return {
		type: ADD_COMMENT,
		payload: comment
	}
}


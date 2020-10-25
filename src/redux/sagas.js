import {REQUEST_USER, SIGN_IN} from "./types";
import {call, put, takeEvery} from "redux-saga/effects";
import {userNotExist, nextStep} from "./actions";

export function* sagaWatcher() {
	yield takeEvery(REQUEST_USER, signInWorker);
}

function* signInWorker(action) {
	const payload = yield call(signIn, action.payload);
	if (!payload.length) {
		yield put(userNotExist());
		return;
	}
	yield put({
		type: SIGN_IN,
		payload: payload
	});
	yield put(nextStep())
}

async function signIn(credentials) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${credentials.email}`);
	return await response.json();
}
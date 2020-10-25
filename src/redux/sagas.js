import {REQUEST_USER, SIGN_IN} from "./types";
import {call, put, takeEvery} from "redux-saga/effects";
import {userNotExist} from "./actions";

export function* sagaWatcher() {
	yield takeEvery(REQUEST_USER, sagaWorker)
}

function* sagaWorker(action) {
	const payload = yield call(signIn, action.payload);
	if (!payload.length) {
		yield put(userNotExist());
	}
	yield put({
		type: SIGN_IN,
		payload: payload
	});
}

async function signIn(credentials) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${credentials.email}`);
	return await response.json();
}
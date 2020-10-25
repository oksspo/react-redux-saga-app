import {CURRENT_USER, NEXT_STEP, SIGN_IN} from "./types";
import { call, put, takeEvery } from "redux-saga/effects";
import { userNotExist, nextStep } from "./actions";
import { push } from  "connected-react-router";

export function* sagaWatcher() {
	yield takeEvery(SIGN_IN, signInWorker);
	yield takeEvery(NEXT_STEP, stepWorker);
}

function* stepWorker(action) {
	yield call(navigate, action.payload);
}

function* navigate(path) {
	yield put(push(path));
}

function* signInWorker(action) {
	const payload = yield call(signIn, action.payload);
	if (!payload.length) {
		yield put(userNotExist());
		return;
	}

	yield put({
		type: CURRENT_USER,
		payload: payload
	});

	yield put(nextStep('/add-post'));
}

async function signIn(credentials) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${credentials.email}`);
	return await response.json();
}
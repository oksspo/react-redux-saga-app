import { call, put, takeEvery } from "redux-saga/effects";
import { CURRENT_USER, SIGN_IN, SIGN_OUT } from "../types/authTypes";
import { nextStep } from "../actions/rootActions";
import { userNotExist } from "../actions/authActions";

export function* authWatcher() {
	yield takeEvery(SIGN_IN, signInWorker);
	yield takeEvery(SIGN_OUT, signOutWorker);
}

function* signInWorker(action) {
	try {
		const payload = yield call(signIn, action.payload);

		if (!payload.length) {
			yield put(userNotExist());
			return;
		}

		const token = btoa(payload);

		yield call(storeToken, token);

		yield put({
			type: CURRENT_USER,
			payload: {
				...payload[0],
				token
			}
		});

		yield put(nextStep('/add-post'));
	} catch (e) {
		console.log('signInWorker error:', error);
	}
}

function* signOutWorker() {
	try {
		yield call(clearToken);
		yield put(nextStep('/'));
	} catch (e) {
		console.log('signOutWorker error:', error);
	}
}

async function signIn(credentials) {
	return fetch(`https://jsonplaceholder.typicode.com/users?email=${credentials.email}`).then((response) => response.json());
}

async function storeToken(token) {
	try {
		await localStorage.setItem('token', token);
	} catch (error) {
		console.log('localStorage error during token store:', error);
	}
}

async function clearToken() {
	try {
		await localStorage.removeItem('token');
	} catch (error) {
		console.log('localStorage error during token store:', error);
	}
}

export async function getToken() {
	try {
		return 'Bearer ' + await localStorage.getItem('token');
	} catch (error) {
		console.log('localStorage error during token get:', error);
	}
}
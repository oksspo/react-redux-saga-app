import {
	ADD_COMMENT,
	ADD_POST,
	CURRENT_USER,
	NEXT_STEP,
	RESTART,
	SIGN_IN,
	SIGN_OUT,
	UPDATE_COMMENT,
	UPDATE_POST
} from "./types";

import {call, put, takeEvery} from "redux-saga/effects";
import {userNotExist, nextStep} from "./actions";
import {push} from "connected-react-router";

export function* sagaWatcher() {
	yield takeEvery(SIGN_IN, signInWorker);
	yield takeEvery(SIGN_OUT, signOutWorker);
	yield takeEvery(NEXT_STEP, stepWorker);
	yield takeEvery(RESTART, restartWorker);
	yield takeEvery(ADD_POST, postWorker);
	yield takeEvery(ADD_COMMENT, commentWorker);
}

function* stepWorker(action) {
	yield call(navigate, action.payload);
}

function* restartWorker() {
	yield put(nextStep('/add-post'));
}

function* navigate(path) {
	yield put(push(path));
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
			payload: {...payload[0],
				token}
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

async function signIn(credentials) {
	return fetch(`https://jsonplaceholder.typicode.com/users?email=${credentials.email}`).then((response) => response.json());
}

function* postWorker(action) {
	try {
		const payload = yield call(createPost, action.payload);
		yield put({
			type: UPDATE_POST,
			payload: payload
		});

		yield put(nextStep('/add-comment'));
	} catch (error) {
		console.log('postWorker error:', error);
	}
}

async function createPost(post) {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: post.title,
			body: post.text,
			userId: post.userId
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	});
	return await response.json();
}

function* commentWorker(action) {
	const payload = yield call(addComment, action.payload);
	yield put({
		type: UPDATE_COMMENT,
		payload: payload
	});

	yield put(nextStep('/review'));
}

async function addComment(post) {
	const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
		method: 'POST',
		body: JSON.stringify({
			name: post.name,
			body: post.comment,
			userId: post.userId
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	});
	return await response.json();
}
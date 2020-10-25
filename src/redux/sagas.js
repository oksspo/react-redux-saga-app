import {ADD_COMMENT, ADD_POST, CURRENT_USER, NEXT_STEP, SIGN_IN, UPDATE_COMMENT, UPDATE_POST} from "./types";
import {call, put, takeEvery} from "redux-saga/effects";
import {userNotExist, nextStep} from "./actions";
import {push} from "connected-react-router";

export function* sagaWatcher() {
	yield takeEvery(SIGN_IN, signInWorker);
	yield takeEvery(NEXT_STEP, stepWorker);
	yield takeEvery(ADD_POST, postWorker);
	yield takeEvery(ADD_COMMENT, commentWorker);
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
		payload: payload[0]
	});

	yield put(nextStep('/add-post'));
}

async function signIn(credentials) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${credentials.email}`);
	return await response.json();
}

function* postWorker(action) {
	const payload = yield call(createPost, action.payload);
	yield put({
		type: UPDATE_POST,
		payload: payload
	});

	yield put(nextStep('/add-comment'));
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
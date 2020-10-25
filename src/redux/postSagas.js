import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_COMMENT, ADD_POST, UPDATE_COMMENT, UPDATE_POST } from "./types";
import { nextStep } from "./rootActions";
import { getToken } from "./authSagas";

export function* postWatcher() {
	yield takeEvery(ADD_POST, postWorker);
	yield takeEvery(ADD_COMMENT, commentWorker);
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
			'Content-type': 'application/json; charset=UTF-8',
			'Authorization': await getToken()
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
			'Content-type': 'application/json; charset=UTF-8',
			'Authorization': await getToken()
		}
	});
	return await response.json();
}
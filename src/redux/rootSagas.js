import {
	NEXT_STEP,
	RESTART
} from "./types";

import {call, put, takeEvery, fork} from "redux-saga/effects";
import {nextStep} from "./actions";
import {push} from "connected-react-router";
import {authWatcher} from "./authSagas";
import {postWatcher} from "./postSagas";

export function* sagaWatcher() {
	yield fork(authWatcher);
	yield fork(postWatcher);
	yield takeEvery(NEXT_STEP, stepWorker);
	yield takeEvery(RESTART, restartWorker);
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
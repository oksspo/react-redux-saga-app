import {
	NEXT_STEP,
	RESTART
} from "../types/rootTypes";

import { call, put, takeEvery, fork } from "redux-saga/effects";
import { hideConfirmation, nextStep } from "../actions/rootActions";
import { push } from "connected-react-router";
import { authWatcher } from "./authSagas";
import { postWatcher } from "./postSagas";

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
	yield put(hideConfirmation());
	yield put(nextStep('/add-post'));
}

function* navigate(path) {
	yield put(push(path));
}
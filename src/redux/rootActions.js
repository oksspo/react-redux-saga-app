import {
	HIDE_CONFIRMATION,
	NEXT_STEP,
	RESTART,
	SHOW_CONFIRMATION
} from "./types";

export function restart() {
	return {
		type: RESTART
	}
}

export function askConfirmation() {
	return {
		type: SHOW_CONFIRMATION
	}
}

export function hideConfirmation() {
	return {
		type: HIDE_CONFIRMATION
	}
}

export function nextStep(path) {
	return {
		type: NEXT_STEP,
		payload: path
	}
}




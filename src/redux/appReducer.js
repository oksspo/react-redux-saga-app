import {NEXT_STEP, ACTIVATE_STEP} from "./types";

const initialState = {
	activeStep: 0
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEXT_STEP:
			return {
				activeStep: state.activeStep + 1
			};
		case ACTIVATE_STEP:
			return {
				activeStep: action.payload
			};
		default:
			return state;
	}
};


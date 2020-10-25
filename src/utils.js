export function getSteps() {
	return ['Sign in', 'Write a post', 'Write a comment', 'Review'];
}

export function getActiveStep(path) {
	return ['/', '/add-post', '/add-comment', '/review'].indexOf(path);
}
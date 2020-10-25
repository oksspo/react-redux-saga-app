import { ADD_COMMENT, ADD_POST } from "../types/postTypes";

export function addPost(post) {
	return {
		type: ADD_POST,
		payload: post
	}
}

export function addComment(comment) {
	return {
		type: ADD_COMMENT,
		payload: comment
	}
}
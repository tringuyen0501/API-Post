import { fetchPostsSaga } from "./posts";
import * as actionTypes from "../actions/actionTypes";
import { all, takeEvery } from "redux-saga/effects";

export function* watchPosts() {
	yield all([takeEvery(actionTypes.FETCH_POSTS, fetchPostsSaga)]);
}

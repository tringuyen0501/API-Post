import * as api from "../../api/api";
import * as actions from "../actions/index";
import { put, call } from "redux-saga/effects";

export function* fetchPostsSaga() {
	try {
		yield put(actions.loadingPosts());
		const response = yield call(api.fetchPosts);
		yield put(actions.fetchPostsSuccess(response.data));
	} catch (error) {
		yield put(actions.fetchPostsFailed());
	}
}

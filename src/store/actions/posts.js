import * as actionTypes from './actionTypes';

export const fetchPosts = () => ({
  type: actionTypes.FETCH_POSTS,
});

export const fetchPostsFailed = () => ({
  type: actionTypes.FETCH_POSTS_FAILURE,
});

export const fetchPostsSuccess = (posts) => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  posts,
});

export const approvePosts = () => ({
  type: actionTypes.APPROVE_POSTS,
});

export const rejectPosts = () => ({
  type: actionTypes.REJECT_POSTS,
});

export const loadingPosts = () => ({
  type: actionTypes.LOADING_POSTS,
});

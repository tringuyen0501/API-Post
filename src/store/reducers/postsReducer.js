import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/reduxUtils';

const initialState = {
  posts: [],
  filteredPosts: [],
  approvePosts: false,
  rejectPosts: false,
  loadingPosts: false,
  errorFetchingPosts: false,
};

const setLoadingPosts = (state, action) => {
  return updateObject(state, { loadingPosts: true });
};

/** FETCH POSTS START */
const fetchPostsFailed = (state, action) => {
  return updateObject(state, {
    loadingPosts: false,
    errorFetchingPosts: true,
  });
};

const fetchPostsSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
    filteredPosts: action.posts,
    loadingPosts: false,
    errorFetchingPosts: false,
  });
};

/** FETCH POSTS END */

const approvePosts = (state, action) => {
  return updateObject(state, {
    approvePosts: true,
  });
};

const rejectPosts = (state, action) => {
  return updateObject(state, {
    rejectPosts: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_FAILURE:
      return fetchPostsFailed(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action);
    case actionTypes.APPROVE_POSTS:
      return approvePosts(state, action);
    case actionTypes.REJECT_POSTS:
      return rejectPosts(state, action);
    case actionTypes.LOADING_POSTS:
      return setLoadingPosts(state, action);
    default:
      return state;
  }
};

export default reducer;

export const POST_IN_PROGRESS = "POST_IN_PROGRESS";
export const postInProgress = () => ({
  type: POST_IN_PROGRESS,
});

export const POST_FAILURE = "POST_FAILURE";
export const postFailure = (error) => ({
  type: POST_FAILURE,
  payload: { error },
});

export const POST_SUCCESS = "POST_SUCCESS";
export const postSuccess = () => ({
  type: POST_SUCCESS,
});

export const ADD_POST = "ADD_POST";
export const addPost = (post) => ({
  type: ADD_POST,
  payload: { post },
});

export const REMOVE_POST = "REMOVE_POST";
export const removePost = (postId) => ({
  type: REMOVE_POST,
  payload: { postId },
});

export const UPDATE_POST = "UPDATE_POST";
export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: { post },
});

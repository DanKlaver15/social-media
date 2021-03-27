export const AUTH_USER_IN_PROGRESS = "AUTH_USER_IN_PROGRESS";
export const authUserInProgress = () => ({
  type: AUTH_USER_IN_PROGRESS,
});

export const AUTH_USER_IN_FAILURE = "AUTH_USER_IN_FAILURE";
export const authUserInFailure = () => ({
  type: AUTH_USER_IN_FAILURE,
});

export const AUTH_USER_IN_SUCCESS = "AUTH_USER_IN_SUCCESS";
export const authUserInSuccess = () => ({
  type: AUTH_USER_IN_SUCCESS,
});

export const ADD_LOGIN_ERROR = "ADD_LOGIN_ERROR";
export const addLoginError = (error) => ({
  type: ADD_LOGIN_ERROR,
  payload: { error },
});

export const REMOVE_LOGIN_ERROR = "REMOVE_LOGIN_ERROR";
export const removeLoginError = () => ({
  type: REMOVE_LOGIN_ERROR,
});

export const UPDATE_USER = "UPDATE_USER";
export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: { user },
});

export const DELETE_USER = "DELETE_USER";
export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: { userId },
});

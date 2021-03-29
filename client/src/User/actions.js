export const LOGIN_IN_PROGRESS = "LOGIN_IN_PROGRESS";
export const loginInProgress = () => ({
  type: LOGIN_IN_PROGRESS,
});

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT,
});

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginFailure = (error = "Error") => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = (user = {}) => ({
  type: LOGIN_SUCCESS,
  payload: { user },
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

export const REGISTER_IN_PROGRESS = "REGISTER_IN_PROGRESS";
export const registerInProgress = () => ({
  type: REGISTER_IN_PROGRESS,
});

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const registerSucceess = () => ({
  type: REGISTER_SUCCESS,
});

export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerFailure = () => ({
  type: REGISTER_FAILURE,
});

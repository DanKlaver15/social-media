export const AUTH_USER_IN_PROGRESS = "LOAD_USER_IN_PROGRESS";
export const authUserInProgress = () => ({
  type: AUTH_USER_IN_PROGRESS,
});

export const AUTH_USER_IN_FAILURE = "LOAD_USER_IN_FAILURE";
export const authUserInFailure = () => ({
  type: AUTH_USER_IN_FAILURE,
});

export const AUTH_USER_IN_SUCCESS = "LOAD_USER_IN_SUCCESS";
export const authUserInSuccess = () => ({
  type: AUTH_USER_IN_SUCCESS,
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

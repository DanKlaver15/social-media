import axios from "axios";

import {
  authUserInProgress,
  authUserInFailure,
  authUserInSuccess,
  updateUser,
  addLoginError,
  removeLoginError,
} from "./actions";

export const loginUserRequest = (user) => async (dispatch, getState) => {
  dispatch(authUserInProgress());

  try {
    const response = await axios.post(
      `http://localhost:5000/api/users/login`,
      user
    );

    const data = await response.data;

    dispatch(authUserInSuccess(data));
    dispatch(updateUser(data));
    dispatch(removeLoginError());
  } catch (err) {
    console.error(err);
    dispatch(authUserInFailure());
    dispatch(addLoginError(err.response.data.message));
  }
};

export const authorizeUserRequest = (userId, token) => async (
  dispatch,
  getState
) => {
  dispatch(authUserInProgress());

  try {
    const response = await axios.post(
      `http://localhost:5000/api/users/auth`,
      { _id: userId },
      { headers: { "x-auth-token": token } }
    );

    const status = await response.status;

    if (status === 201) {
      dispatch(authUserInSuccess({ _id: userId, token }));
      dispatch(updateUser({ _id: userId, token }));
    } else {
      dispatch(authUserInFailure());
    }
  } catch (err) {
    dispatch(authUserInFailure());
    console.error(err);
  }
};

export const updateUserRequest = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/users/${user._id}`,
      user
    );

    const updatedUser = await response.data;

    dispatch(updateUser(updatedUser));
  } catch (err) {
    console.log(err);
  }
};

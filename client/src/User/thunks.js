import axios from "axios";
import { authHeader } from "../helpers/authHeader";

import {
  loginInProgress,
  loginFailure,
  loginSuccess,
  updateUser,
  logout,
  removeLoginError,
  registerSucceess,
} from "./actions";

import { getFriendsRequest } from "../Friend/thunks";

export const loginRequest = (user) => async (dispatch, getState) => {
  dispatch(loginInProgress());

  try {
    const response = await axios.post(
      `http://localhost:5000/api/users/login`,
      user
    );

    const data = await response.data;

    dispatch(removeLoginError());
    dispatch(getFriendsRequest(data._id, data.token));
    dispatch(loginSuccess(data));
    saveUser(data);
  } catch (err) {
    console.log(err);
    dispatch(loginFailure(err.response.data.message));
  }
};

export const logoutRequest = (user) => async (dispatch, getState) => {
  removeFromLocalStorage();
  dispatch(logout());
  dispatch(removeLoginError());
};

export const authorizeRequest = (_id, token) => async (dispatch, getState) => {
  dispatch(loginInProgress());

  try {
    const response = await axios.post(
      `http://localhost:5000/api/users/auth`,
      { _id },
      authHeader()
    );

    const status = await response.status;

    if (status === 201) {
      dispatch(loginSuccess({ _id, token }));
    }
  } catch (err) {
    dispatch(loginFailure(err.response.data.message));
    // console.error(err);
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

export const registerRequest = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/users/register`,
      user
    );

    const data = await response.data;

    dispatch(registerSucceess());
    dispatch(loginSuccess(data));
    saveUser(data);
  } catch (err) {
    console.log(err);
    dispatch(loginFailure(err.response.data.message));
  }
};

export function removeFromLocalStorage() {
  localStorage.removeItem("zestyauth");
}

export function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("zestyauth"));
}

function saveUser(user) {
  return window.localStorage.setItem("zestyauth", JSON.stringify(user));
}

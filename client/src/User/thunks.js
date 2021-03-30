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
  updateAvatarProgress,
  updateAvatarFailure,
  updateAvatarSuccess,
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
    dispatch(getFriendsRequest(data.user._id, data.token));
    dispatch(loginSuccess());
    dispatch(updateUser(data.user));
    saveUser({ _id: data.user._id, token: data.token });
  } catch (err) {
    console.log(err);
    if (err.response) {
      dispatch(loginFailure(err.response.data.message));
    } else {
      dispatch(loginFailure("An unknown error has occured"));
    }
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
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(loginSuccess());
    dispatch(updateUser(data.user));
  } catch (err) {
    if (err.response) {
      dispatch(loginFailure(err.response.data.message));
    } else {
      dispatch(loginFailure("An unknown error has occured"));
    }
    console.error(err);
  }
};

export const updateAvatarRequest = (userId, file) => async (
  dispatch,
  getState
) => {
  dispatch(updateAvatarProgress());
  let formData = new FormData();
  formData.append("avatar", file);

  try {
    const response = await axios.post(
      `http://localhost:5000/api/users/${userId}/avatar`,
      formData,
      {
        headers: { ...authHeader(), "Content-Type": "multipart/form-data" },
      }
    );

    const updatedUser = await response.data;
    dispatch(updateAvatarSuccess());
    dispatch(updateUser(updatedUser));
  } catch (err) {
    dispatch(updateAvatarFailure());
    console.log(err);
  }
};

export const updateUserRequest = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/users/${user._id}`,
      user,
      { headers: authHeader() }
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
    dispatch(loginSuccess());
    dispatch(updateUser(data.user));
    saveUser({ _id: data.user._id, token: data.token });
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

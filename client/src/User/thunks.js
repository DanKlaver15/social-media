import axios from "axios";

import {
  authUserInProgress,
  authUserInFailure,
  authUserInSuccess,
  updateUser,
  deleteUser,
} from "./actions";

export const updateUserRequest = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/users/${userId}`,
      user
    );

    const updatedUser = response.data;

    dispatch(updateUser(updatedUser));
  } catch (err) {
    console.log(err);
  }
};

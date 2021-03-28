import axios from "axios";

import {
  friendsInProgress,
  friendsInFailure,
  friendsInSuccess,
  updateFriends,
} from "./actions";

export const getFriendsRequest = (userId, token) => async (
  dispatch,
  getState
) => {
  dispatch(friendsInProgress());

  try {
    const response = await axios.get(
      `http://localhost:5000/api/users/${userId}/friends`,
      { headers: { "x-auth-token": token } }
    );

    const friends = await response.data;

    dispatch(friendsInSuccess());
    dispatch(updateFriends(friends));
  } catch (err) {
    console.log(err);
    dispatch(friendsInFailure());
  }
};

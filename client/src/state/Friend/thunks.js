import axios from "axios";
import { authHeader } from "../../helpers/authHeader";

import {
  friendsInProgress,
  friendsInFailure,
  friendsInSuccess,
  updateFriends,
  deleteFriend,
} from "./actions";

export const getFriendsRequest = (userId) => async (dispatch, getState) => {
  dispatch(friendsInProgress());

  try {
    const response = await axios.get(
      `http://localhost:5000/api/users/${userId}/friends`,
      { headers: authHeader() }
    );

    const friends = await response.data;

    dispatch(friendsInSuccess());
    dispatch(updateFriends(friends));
  } catch (err) {
    console.log(err);
    dispatch(friendsInFailure());
  }
};

export const unfriendRequest = (friendId) => async (dispatch, getState) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/friends/${friendId}`,
      { headers: authHeader() }
    );
    console.log(response);
    dispatch(deleteFriend(response.data));
  } catch (err) {
    console.log(err);
  }
};

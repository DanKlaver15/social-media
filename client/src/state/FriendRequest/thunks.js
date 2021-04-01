import axios from "axios";
import { authHeader, userId } from "../../helpers/authHeader";

import {
  friendRequestInProgress,
  friendRequestSuccess,
  friendsRequestFailure,
  updateFriendsStatus,
} from "./actions";

export const sendFriendRequest = (receiverId) => async (dispatch, getState) => {
  dispatch(friendRequestInProgress());

  try {
    const response = await axios.post(
      `http://localhost:5000/api/friendRequest/${userId()}/${receiverId}`,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(friendRequestSuccess(data));
    dispatch(updateFriendsStatus(receiverId, "pending"));
  } catch (err) {
    console.log(err);
    if (err.response) {
      dispatch(friendsRequestFailure(err.response.data.message));
    }
    dispatch(friendsRequestFailure("Error!"));
  }
};

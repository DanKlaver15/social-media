import axios from "axios";
import { authHeader, userId } from "../../helpers/authHeader";

import {
  sendFriendRequestInProgress,
  sendFriendRequestSuccess,
  sendFriendRequestFailure,
  updateFriendStatus,
  updateAllFriendRequests,
  friendRequestsInProgress,
  friendRequestsSuccess,
  friendRequestsFailure,
  acceptFriendRequestInProgress,
  acceptFriendRequestSuccess,
  acceptFriendRequestFailure,
  declineFriendRequestInProgress,
  declineFriendRequestSuccess,
  declineFriendRequestFailure,
  acceptFriend,
  declineFriend,
} from "./actions";

export const sendFriendRequest = (receiverId) => async (dispatch, getState) => {
  dispatch(sendFriendRequestInProgress());

  try {
    const response = await axios.post(
      `http://localhost:5000/api/friendRequest/${userId()}/${receiverId}`,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(sendFriendRequestSuccess(data));
    dispatch(updateFriendStatus(receiverId, "pending"));
  } catch (err) {
    console.log(err);
    if (err.response) {
      dispatch(sendFriendRequestFailure(err.response.data.message));
    }
    dispatch(sendFriendRequestFailure("Error!"));
  }
};

export const getFriendRequests = () => async (dispatch, getState) => {
  dispatch(friendRequestsInProgress());

  try {
    const response = await axios.get(
      `http://localhost:5000/api/friendRequest/${userId()}`,
      { headers: authHeader() }
    );

    const requests = await response.data;

    dispatch(friendRequestsSuccess());
    dispatch(updateAllFriendRequests(requests));
  } catch (err) {
    console.log(err);
    dispatch(friendRequestsFailure());
  }
};

export const acceptFriendRequest = (requestId) => async (
  dispatch,
  getState
) => {
  dispatch(acceptFriendRequestInProgress());

  try {
    await axios.put(
      `http://localhost:5000/api/friendRequest/accept/${userId()}/${requestId}`,
      { headers: authHeader() }
    );

    dispatch(acceptFriendRequestSuccess());
    dispatch(acceptFriend(requestId));
  } catch (err) {
    dispatch(acceptFriendRequestFailure());
  }
};

export const declineFriendRequest = (requestId) => async (
  dispatch,
  getState
) => {
  dispatch(declineFriendRequestInProgress());

  try {
    const response = await axios.delete(
      `http://localhost:5000/api/friendRequest/${requestId}`,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(declineFriendRequestSuccess());
    dispatch(declineFriend(data._id));
  } catch (err) {
    dispatch(declineFriendRequestFailure());
  }
};
